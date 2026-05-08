import { Controller, Get, Param } from '@nestjs/common';
import { CourseService } from './course.service';
import { ResponseService } from '@libs/shared';

@Controller('course')
export class CourseController {
  constructor(
    private readonly courseService: CourseService,
    private readonly responseService: ResponseService,
  ) {}

  @Get('list')
  async findAll() {
    console.log('Course list API called');
    const data = await this.courseService.findAll();
    console.log('Course list data:', data);
    return this.responseService.success(data);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    console.log('Course detail API called for id:', id);
    const data = await this.courseService.findOne(id);
    console.log('Course detail data:', data);
    return this.responseService.success(data);
  }
}