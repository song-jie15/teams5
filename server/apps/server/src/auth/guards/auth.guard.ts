import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { RefreshTokenPayload } from '@en/common/user';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('请先登录');
    }
    const token = authHeader.split(' ')[1];
    try {
      const decoded = this.jwtService.verify<RefreshTokenPayload>(token);
      if (decoded.tokenType !== 'access') {
        throw new UnauthorizedException('token已过期或无效');
      }
      request.user = decoded;
      return true;
    } catch {
      throw new UnauthorizedException('token已过期或无效');
    }
  }
}
