import { Resolver, Query, ResolveField } from '@nestjs/graphql';
import { DogsService } from 'src/dogs/dogs.service';
import { CatsService } from '../cats/cats.service';
import { Cat, Dog } from 'src/graphql';

@Resolver('Pet')
export class PetsResolver {
  constructor(
    private catsService: CatsService,
    private dogsService: DogsService,
  ) {}

  @ResolveField()
  __resolveType(value: Cat | Dog) {
    if ('mice' in value) {
      return 'Cat';
    }
    return 'Dog';
  }

  @Query()
  pets() {
    const dogs = this.dogsService.getDogs(4);
    const cats = this.catsService.getCats(4);
    return [...cats, ...dogs];
  }
}
