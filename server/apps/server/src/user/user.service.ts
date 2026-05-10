import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { PrismaService } from '@libs/shared';
import { ResponseService } from '@libs/shared';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';
import * as bcrypt from 'bcryptjs';
import { Prisma } from '@libs/shared/generated/prisma/client';
import type { Token, RefreshTokenPayload } from '@en/common/user';
import { userSelect } from './user.select';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly response: ResponseService,
    private readonly jwtService: JwtService,
    private readonly authService: AuthService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const { password, ...rest } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const user = await this.prisma.user.create({
        data: { ...rest, password: hashedPassword },
        select: userSelect,
      });
      const token = this.authService.generateToken({ userId: user.id, name: user.name, email: user.email });
      return this.response.success({ ...user, token });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        const target = (error.meta?.target as string[])?.[0];
        const field = target === 'phone' ? '手机号' : target === 'email' ? '邮箱' : '该信息';
        throw new ConflictException(`${field}已被注册`);
      }
      throw error;
    }
  }

  async refreshToken(refreshToken: string) {
    try {
      const decoded = this.jwtService.verify<RefreshTokenPayload>(refreshToken);
      if (decoded.tokenType !== 'refresh') {
        throw new UnauthorizedException('refreshToken已过期或无效');
      }
      const user = await this.prisma.user.findUnique({
        where: { id: decoded.userId },
      });
      if (!user) {
        throw new UnauthorizedException('用户不存在');
      }
      const token = this.authService.generateToken({ userId: user.id, name: user.name, email: user.email });
      return this.response.success(token);
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new UnauthorizedException('refreshToken已过期或无效');
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
}
