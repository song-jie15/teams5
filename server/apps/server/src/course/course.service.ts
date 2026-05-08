import { Injectable } from '@nestjs/common';
import { PrismaService, ResponseService } from '@libs/shared';

@Injectable()
export class CourseService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly response: ResponseService,
  ) {}

  async findAll() {
    console.log('Fetching courses from database...');
    const courses = await this.prisma.course.findMany();
    console.log('Raw courses from database:', courses);

    const fixedCourses = courses.map(item => {
      // Convert OSS URLs to local URLs for development
      const fileName = item.url.split('/').pop();
      return {
        ...item,
        url: `/api/v1/course/image/${fileName}`, // Use local image serving
        price: Number(item.price), // Convert Decimal to number for consistent formatting
      };
    });

    console.log('✅ 处理后的课程数据（带阿里云图片）：', fixedCourses);
    return this.response.success(fixedCourses);
  }

  // 👉 只改这里！不抛错，找不到就返回 null，前端不会崩溃
  async findOne(id: string) {
    const course = await this.prisma.course.findUnique({
      where: { id },
    });

    // 找不到课程，直接返回 null，不报错！
    if (!course) {
      return this.response.success(null);
    }

    // Convert Decimal to number for consistent formatting
    const fileName = course.url.split('/').pop();
    const formattedCourse = {
      ...course,
      url: `/api/v1/course/image/${fileName}`, // Use local image serving
      price: Number(course.price),
    };

    return this.response.success(formattedCourse);
  }
}