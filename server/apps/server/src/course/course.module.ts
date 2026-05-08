import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { CourseImageController } from './course-image.controller';
import { SharedModule } from '@libs/shared';

@Module({
  imports: [SharedModule],
  controllers: [CourseController, CourseImageController],
  providers: [CourseService],
})
export class CourseModule {}