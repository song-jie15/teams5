import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SharedModule } from '@libs/shared';
import { WordBookModule } from './word-book/word-book.module';
 import { ConfigModule } from '@nestjs/config';
 import {MinioModule} from '@libs/shared/minio/minio.module';
import { TrackerModule } from './tracker/tracker.module';
import { AuthModule } from './auth/auth.module';
import { CourseModule } from './course/course.module';
@Module({
  imports: [UserModule, AuthModule, SharedModule, WordBookModule, TrackerModule, CourseModule,
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
