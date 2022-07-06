import { Resolver, Query, Args } from '@nestjs/graphql';
import { CatsService } from './cats.service';

@Resolver()
export class CatsResolver {
  constructor(private catsService: CatsService) {}
  @Query()
  cat(@Args('id') id: string) {
    return this.catsService.getCat(id);
  }

  @Query()
  cats() {
    return this.catsService.getCats(6);
  }
}
