import { Module } from '@nestjs/common';
import { PetsResolver } from './pets.resolver';
import { CatsService } from '../cats/cats.service';
import { DogsService } from '../dogs/dogs.service';

@Module({
  providers: [PetsResolver, CatsService, DogsService],
})
export class PetsModule {}
