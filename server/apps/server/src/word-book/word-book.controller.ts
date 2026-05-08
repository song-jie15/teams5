import { Controller, Get, Query } from '@nestjs/common';
import { WordBookService } from './word-book.service';
<<<<<<< HEAD
import { AuthGuard } from '../auth/guards/auth.guard';
=======
>>>>>>> 4c73c8495d1a48659a6a13317d34d6ca4a2dc34a
import type { WordQuery } from '@en/common/word';
@Controller('word-book')
<<<<<<< HEAD
@UseGuards(AuthGuard)
=======
>>>>>>> 4c73c8495d1a48659a6a13317d34d6ca4a2dc34a
export class WordBookController {
  constructor(private readonly wordBookService: WordBookService) {}

  @Get()
  findAll(@Query() query: WordQuery) {
    return this.wordBookService.findAll(query);
  }

}
