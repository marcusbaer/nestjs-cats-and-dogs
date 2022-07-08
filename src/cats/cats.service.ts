import { Injectable } from '@nestjs/common';
import { Cat } from '../graphql';

@Injectable()
export class CatsService {
  getCat(id: string): Cat {
    let counter = parseInt(id) || 1;
    counter = counter > 9 ? 9 : counter;
    const age = Math.round(Math.random() * counter + 1);
    const nameParts = new Array(counter).fill('Meouw');
    const name = nameParts.join('') + 'i';
    return {
      age,
      id,
      name,
      mice: age,
    };
  }

  getCats(numberOfCats: number): Array<Cat> {
    const cats = [...new Array(numberOfCats)].map((_, index) => {
      const catId = (index + 1).toString();
      return this.getCat(catId);
    });
    return cats;
  }
}
