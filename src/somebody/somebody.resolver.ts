import {
  Resolver,
  Query,
  ResolveField,
  Args,
  Parent,
  Info,
} from '@nestjs/graphql';
import { DogsService } from 'src/dogs/dogs.service';
import { CatsService } from '../cats/cats.service';
// import { Somebody } from '../graphql';

@Resolver()
export class SomebodyResolver {
  constructor(
    private catsService: CatsService,
    private dogsService: DogsService,
  ) {}

  //   @Query()
  //   somebody() {
  //     return {
  //       name: 'Somebody',
  //       pets: [this.catsService.getCat('1'), this.dogsService.getDog('2')],
  //       friends: [
  //         {
  //           name: 'Somebody Else',
  //           pets: [this.catsService.getCat('3'), this.dogsService.getDog('4')],
  //         },
  //       ],
  //     };
  //   }

  // @Query()
  // cat(@Args('id') id: string) {
  //   return this.catsService.getCat(id);
  // }
}

// @Resolver(type => Somebody) // Reminder: Somebody is an interface
@Resolver('Somebody')
export class SomebodyInterfaceResolver {
  // @ResolveField(() => [Somebody])
  @ResolveField()
  cat(
    @Parent() somebody, // Resolved object that implements Somebody
    @Info() { parentType }, // Type of the object that implements Somebody
    @Args('id', { type: () => String }) id: string,
  ) {
    const { name } = somebody;
    // const cat = this.catsService.getCat(id);
    // cat.name = `${name}'s ${cat.name}`;
    return `HELLO CAT ${id} of ${name}!`;
  }
}
