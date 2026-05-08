import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { WordBookService } from './word-book.service';
import { AuthGuard } from '../auth/guards/auth.guard';
import type { WordQuery } from '@en/common/word';
@Controller('word-book')
@UseGuards(AuthGuard)
export class WordBookController {
  constructor(private readonly wordBookService: WordBookService) {}

  @Get()
  findAll(@Query() query: WordQuery) {
    return this.wordBookService.findAll(query);
  }

}
