import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getCat(id: string) {
    let counter = parseInt(id) || 1;
    counter = counter > 9 ? 9 : counter;
    const age = Math.round(Math.random() * counter + 1);
    const nameParts = new Array(counter).fill('Meouw');
    const name = nameParts.join('') + 'i';
    return {
      __typename: 'Cat',
      age,
      id,
      name,
    };
  }

  getCats(numberOfCats: number) {
    const cats = [...new Array(numberOfCats)].map((_, index) => {
      const catId = (index + 1).toString();
      return this.getCat(catId);
    });
    return cats;
  }
}
