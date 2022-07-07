import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { CatsService } from './cats.service';

@Resolver()
export class CatsResolver {
  constructor(private catsService: CatsService) {}
  // @Query()
  // cat(@Args('id') id: string) {
  //   return this.catsService.getCat(id);
  // }

  // @Query(returns => Cat, { name: 'cat' })
  // async getCat(@Args('id', { type: () => Int }) id: string) {
  //   return this.catsService.getCat(id);
  // }

  @Query()
  cats() {
    return this.catsService.getCats(6);
  }

  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  // @Resolver('Somebody')
  // @ResolveField()
  // cat(@Args('id') id: string, @Parent() somebody) {
  //   const { name } = somebody;
  //   const cat = this.catsService.getCat(id);
  //   console.log(`${name}'s ${cat.name}`);
  //   return cat;
  // }
}
