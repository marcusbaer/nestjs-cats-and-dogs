import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Post,
  Req,
} from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  // @HttpCode(204)
  @Header('Cache-Control', 'none')
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Req() request: Request): string {
    console.log(request);
    return 'This action returns all cats';
  }
}
