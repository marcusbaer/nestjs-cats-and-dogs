import { Module } from '@nestjs/common';
import { SomebodyResolver } from './somebody.resolver';
import { CatsService } from '../cats/cats.service';
import { DogsService } from '../dogs/dogs.service';

@Module({
  providers: [SomebodyResolver, CatsService, DogsService],
})
export class SomebodyModule {}
