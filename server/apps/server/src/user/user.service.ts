import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '@libs/shared';
import { ResponseService } from '@libs/shared';
import { MinioService } from '@libs/shared/minio/minio.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Prisma } from '@libs/shared/generated/prisma/client';
import type { UserLogin, UserRegister, UserUpdate, Token, AvatarResult } from '@en/common/user';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly response: ResponseService,
    private readonly jwtService: JwtService,
    private readonly minioService: MinioService,
    private readonly configService: ConfigService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { password, ...rest } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const user = await this.prisma.user.create({
        data: { ...rest, password: hashedPassword },
      });
      const token = this.jwtService.sign({ sub: user.id, phone: user.phone });
      const { password: _, ...result } = user;
      return this.response.success({ user: result, token });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        const target = (error.meta?.target as string[])?.[0];
        const field = target === 'phone' ? '手机号' : target === 'email' ? '邮箱' : '该信息';
        throw new ConflictException(`${field}已被注册`);
      }
      throw error;
    }
  }

  async findAll() {
    const users = await this.prisma.user.findMany({
      select: { id: true, name: true, phone: true, email: true, avatar: true, wordNumber: true, dayNumber: true, createdAt: true, updatedAt: true, lastLoginAt: true },
    });
    return this.response.success(users);
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: { id: true, name: true, phone: true, email: true, avatar: true, wordNumber: true, dayNumber: true, createdAt: true, updatedAt: true, lastLoginAt: true },
    });
    return this.response.success(user);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const data: any = { ...updateUserDto };
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    const user = await this.prisma.user.update({
      where: { id },
      data,
    });
    const { password: _, ...result } = user;
    return this.response.success(result);
  }

  async remove(id: string) {
    await this.prisma.user.delete({ where: { id } });
    return this.response.success(null);
  }

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
    const token = this.jwtService.sign({ sub: user.id, phone: user.phone });
    const { password: _, ...result } = user;
    return this.response.success({ user: result, token });
  }

  async register(dto: UserRegister) {
    const { password, ...rest } = dto;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const user = await this.prisma.user.create({
        data: { ...rest, password: hashedPassword },
      });
      const token = this.jwtService.sign({ sub: user.id, phone: user.phone });
      const { password: _, ...result } = user;
      return this.response.success({ user: result, token });
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
      const payload = this.jwtService.verify<{ sub: string; phone: string }>(dto.refreshToken);
      const user = await this.prisma.user.findUnique({ where: { id: payload.sub } });
      if (!user) {
        throw new UnauthorizedException('用户不存在');
      }
      const accessToken = this.jwtService.sign({ sub: user.id, phone: user.phone });
      return this.response.success({ accessToken, refreshToken: dto.refreshToken });
    } catch {
      throw new UnauthorizedException('refreshToken无效或已过期');
    }
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

  async updateUser(dto: UserUpdate, user: { id: string; phone: string }) {
    const updated = await this.prisma.user.update({
      where: { id: user.id },
      data: { ...dto },
    });
    const { password: _, ...result } = updated;
    return this.response.success(result);
  }
}
