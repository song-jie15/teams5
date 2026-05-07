import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from '@libs/shared';
import { WordBookModule } from './word-book/word-book.module';
@Module({
  imports: [UserModule, AuthModule, SharedModule, WordBookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
