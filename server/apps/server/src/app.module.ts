import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from '@libs/shared';
import { WordBookModule } from './word-book/word-book.module';
 import { ConfigModule } from '@nestjs/config';
 import {MinioModule} from '@libs/shared/minio/minio.module';
import { TrackerModule } from './tracker/tracker.module';
@Module({
  imports: [UserModule, AuthModule, SharedModule, WordBookModule, TrackerModule,
     ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MinioModule
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
