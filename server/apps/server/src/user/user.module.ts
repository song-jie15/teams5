import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Config } from '@en/config';

@Module({
  imports: [
    JwtModule.register({
      secret: Config.jwt.secret,
      signOptions: { expiresIn: Config.jwt.expiresIn },
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
