import { Resolver, Query, Args } from '@nestjs/graphql';
import { DogsService } from 'src/dogs/dogs.service';
import { CatsService } from '../cats/cats.service';

@Resolver()
export class PetsResolver {
  constructor(
    private catsService: CatsService,
    private dogsService: DogsService,
  ) {}

  @Query()
  pets() {
    const dogs = this.dogsService.getDogs(4);
    const cats = this.catsService.getCats(4);
    return [...cats, ...dogs];
  }
}
