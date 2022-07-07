import { Resolver, Query, Args } from '@nestjs/graphql';
import { DogsService } from './dogs.service';

@Resolver('Dog')
export class DogsResolver {
  constructor(private dogsService: DogsService) {}
  @Query()
  dog(@Args('id') id: string) {
    return this.dogsService.getDog(id);
  }

  @Query()
  dogs() {
    return this.dogsService.getDogs(6);
  }
}
