import { Injectable, ConflictException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '@libs/shared';
import { ResponseService } from '@libs/shared';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Prisma } from '@libs/shared/generated/prisma/client';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly response: ResponseService,
    private readonly jwtService: JwtService,
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
}
