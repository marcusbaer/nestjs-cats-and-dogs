import { Injectable } from '@nestjs/common';
import { Dog } from '../graphql';
@Injectable()
export class DogsService {
  getDog(id: string): Dog {
    let counter = parseInt(id) || 1;
    counter = counter > 9 ? 9 : counter;
    const age = Math.round(Math.random() * counter + 1);
    const nameParts = new Array(counter).fill('Wuff');
    const name = nameParts.join('') + 'i';
    return {
      age,
      id,
      name,
      bones: age,
    };
  }

  getDogs(numberOfDogs: number): Array<Dog> {
    const dogs = [...new Array(numberOfDogs)].map((_, index) => {
      const dogId = (index + 1).toString();
      return this.getDog(dogId);
    });
    return dogs;
  }
}
