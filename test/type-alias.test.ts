import { Category, Product } from '../src/type-alias';

describe('Test alias', () => {
  it('should can use type alias', () => {
    const category: Category = {
      id: '1',
      name: 'Handphone'
    };

    const product: Product = {
      id: '1',
      name: 'Samsung S20',
      price: 25000000,
      category: category
    };

    console.log(product);
  });
});
