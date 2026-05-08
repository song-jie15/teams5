import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '@libs/shared';
import { ResponseService } from '@libs/shared';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import type { TokenPayload, Token, RefreshTokenPayload } from '@en/common/user';
import { Config } from '@en/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly response: ResponseService,
    private readonly jwtService: JwtService,
  ) {}

  generateToken(payload: TokenPayload): Token {
    return {
      accessToken: this.jwtService.sign<RefreshTokenPayload>({ ...payload, tokenType: 'access' }),
      refreshToken: this.jwtService.sign<RefreshTokenPayload>({ ...payload, tokenType: 'refresh' }, { expiresIn: Config.jwt.refreshExpiresIn }),
    }
  }

  async login(phone: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { phone } });
    if (!user) {
      throw new UnauthorizedException('手机号未注册');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('密码错误');
    }
    await this.prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });
    const token = this.generateToken({ userId: user.id, name: user.name, email: user.email });
    const { password: _, ...result } = user;
    return this.response.success({ ...result, token });
  }
}
