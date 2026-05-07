import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { WordBookService } from './word-book.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import type { WordQuery } from '@en/common/word';

@Controller('word-book')
@UseGuards(JwtAuthGuard)
export class WordBookController {
  constructor(private readonly wordBookService: WordBookService) {}

  @Get()
  findAll(@Query() query: WordQuery) {
    return this.wordBookService.findAll(query);
  }

}
