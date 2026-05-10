import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { PrismaService } from '@libs/shared';
import { ResponseService } from '@libs/shared';
import { MinioService } from '@libs/shared/minio/minio.service';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';
import * as bcrypt from 'bcryptjs';
import { Prisma } from '@libs/shared/generated/prisma/client';
import type { RefreshTokenPayload, UserLogin, UserRegister, UserUpdate, Token, AvatarResult } from '@en/common/user';
import { ConfigService } from '@nestjs/config';
import { userSelect } from './user.select';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly response: ResponseService,
    private readonly jwtService: JwtService,
    private readonly minioService: MinioService,
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {}

  async login(dto: UserLogin) {
    const user = await this.prisma.user.findUnique({ where: { phone: dto.phone } });
    if (!user) {
      throw new UnauthorizedException('手机号未注册');
    }
    const isPasswordValid = await bcrypt.compare(dto.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('密码错误');
    }
    await this.prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });
    const token = this.authService.generateToken({ userId: user.id, name: user.name, email: user.email });
    const { password: _, ...result } = user;
    return this.response.success({ ...result, token });
  }

  async register(dto: UserRegister) {
    const { password, ...rest } = dto;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const user = await this.prisma.user.create({
        data: { ...rest, password: hashedPassword },
      });
      const token = this.authService.generateToken({ userId: user.id, name: user.name, email: user.email });
      const { password: _, ...result } = user;
      return this.response.success({ ...result, token });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        const target = (error.meta?.target as string[])?.[0];
        const field = target === 'phone' ? '手机号' : target === 'email' ? '邮箱' : '该信息';
        throw new ConflictException(`${field}已被注册`);
      }
      throw error;
    }
  }

  async refreshToken(dto: Omit<Token, 'accessToken'>) {
    try {
      const payload = this.jwtService.verify<RefreshTokenPayload>(dto.refreshToken);
      if (payload.tokenType !== 'refresh') {
        throw new UnauthorizedException('refreshToken无效或已过期');
      }
      const user = await this.prisma.user.findUnique({ where: { id: payload.userId } });
      if (!user) {
        throw new UnauthorizedException('用户不存在');
      }
      return this.response.success(this.authService.generateToken({ userId: user.id, name: user.name, email: user.email }));
    } catch {
      throw new UnauthorizedException('refreshToken无效或已过期');
    }
  }

  async findAll() {
    const test = await this.prisma.user.findMany({ select: userSelect });
    return this.response.success(test);
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async profile(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: userSelect,
    });
    if (!user) {
      throw new UnauthorizedException('用户不存在');
    }
    return this.response.success(user);
  }

  async updateProfile(userId: string, dto: UpdateProfileDto) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new UnauthorizedException('用户不存在');
    }
    const updated = await this.prisma.user.update({
      where: { id: userId },
      data: dto,
      select: userSelect,
    });
    return this.response.success(updated);
  }

  async changePassword(userId: string, dto: ChangePasswordDto) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new UnauthorizedException('用户不存在');
    }
    const isPasswordValid = await bcrypt.compare(dto.oldPassword, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('原密码不正确');
    }
    const hashedPassword = await bcrypt.hash(dto.newPassword, 10);
    await this.prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });
    return this.response.success(null);
  }

  async uploadAvatar(file: Express.Multer.File) {
    if (!file) {
      return this.response.error(null, '文件不存在');
    }
    if (file.size > 1024 * 1024 * 5) {
      return this.response.error(null, '文件大小不能超过5MB');
    }
    if (!file.mimetype.includes('image')) {
      return this.response.error(null, '文件类型不支持');
    }
    const bucket = this.minioService.getBucket();
    const ext = file.originalname.split('.').pop();
    const objectName = `avatar/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    await this.minioService.getClient().putObject(bucket, objectName, file.buffer, file.size, {
      'Content-Type': file.mimetype,
    });
    const isHttps = !!Number(this.configService.get('MINIO_USE_SSL'));
    const protocol = isHttps ? 'https' : 'http';
    const endpoint = this.configService.get('MINIO_ENDPOINT');
    const port = this.configService.get('MINIO_PORT');
    const previewUrl = `${protocol}://${endpoint}:${port}/${bucket}/${objectName}`;
    const result: AvatarResult = {
      previewUrl,
      databaseUrl: previewUrl,
    };
    return this.response.success(result);
  }

  async updateUser(dto: UserUpdate, user: { userId: string }) {
    const updated = await this.prisma.user.update({
      where: { id: user.userId },
      data: { ...dto },
    });
    const { password: _, ...result } = updated;
    return this.response.success(result);
  }
}
