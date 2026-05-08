import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { JwtModule } from '@nestjs/jwt';
=======
import { JwtModule, JwtSignOptions } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
>>>>>>> 4c73c8495d1a48659a6a13317d34d6ca4a2dc34a
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { Config } from '@en/config';

@Module({
  imports: [
<<<<<<< HEAD
    JwtModule.register({
      secret: Config.jwt.secret,
      signOptions: { expiresIn: Config.jwt.accessExpiresIn },
=======
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: Config.jwt.secret,
      signOptions: { 
        expiresIn: Config.jwt.expiresIn as JwtSignOptions['expiresIn']
      },
>>>>>>> 4c73c8495d1a48659a6a13317d34d6ca4a2dc34a
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard],
  exports: [AuthService, JwtModule, AuthGuard],
})
export class AuthModule {}

