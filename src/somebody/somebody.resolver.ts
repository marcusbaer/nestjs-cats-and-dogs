import { Resolver, Query } from '@nestjs/graphql';
import { DogsService } from 'src/dogs/dogs.service';
import { CatsService } from '../cats/cats.service';

@Resolver()
export class SomebodyResolver {
  constructor(
    private catsService: CatsService,
    private dogsService: DogsService,
  ) {}

  @Query()
  somebody() {
    return {
      name: 'Somebody',
      pets: [this.catsService.getCat('1'), this.dogsService.getDog('2')],
      friends: [
        {
          name: 'Somebody Else',
          pets: [this.catsService.getCat('3'), this.dogsService.getDog('4')],
        },
      ],
    };
  }
}
