import { Controller, Get, Param, Res } from '@nestjs/common';
import type { Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';

@Controller('course')
export class CourseImageController {
  @Get('image/:filename')
  serveImage(@Param('filename') filename: string, @Res() res: Response) {
    let actualFilename = filename;
    
    // 如果是完整的 URL，提取文件名部分
    if (filename.includes('http://') || filename.includes('https://')) {
      const url = new URL(filename);
      actualFilename = path.basename(url.pathname);
    }
    
    // 安全检查：防止路径遍历
    if (actualFilename.includes('..') || actualFilename.includes('/')) {
      actualFilename = 'gk.png';
    }

    const imagePath = path.join(process.cwd(), 'prisma', 'assets', actualFilename);

    if (fs.existsSync(imagePath)) {
      return res.sendFile(imagePath);
    } else {
      const defaultImagePath = path.join(process.cwd(), 'prisma', 'assets', 'gk.png');
      return res.sendFile(defaultImagePath);
    }
  }
}