import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
<<<<<<< HEAD
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
=======

@Module({
>>>>>>> 4c73c8495d1a48659a6a13317d34d6ca4a2dc34a
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
