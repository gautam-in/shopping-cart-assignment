/* eslint-disable arrow-parens */
import EcommService from '../__mocks__/ecommService';

describe('EcommService tests', () => {
  let ecommService;

  beforeAll(() => {
    ecommService = new EcommService();
  });

  test('should return a list of categories', () => {
    const expectedResult = [{
      name: 'Beverages',
      key: 'beverages',
      description: 'Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ',
      enabled: true,
      order: 3,
      imageUrl: '/static/images/category/beverages.png',
      id: '5b675e5e5936635728f9fc30',
    },
    {
      name: 'Bakery Cakes and Dairy',
      key: 'bakery-cakes-dairy',
      description: 'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.',
      enabled: true,
      order: 2,
      imageUrl: '/static/images/category/bakery.png',
      id: '5b6899123d1a866534f516de',
    }];
    ecommService.getCategories().then(categories => {
      expect(categories).toEqual(expectedResult);
    });
  });

  test('should return a list of products', () => {
    const expectedResult = [
      {
        name: 'Fresho Kiwi - Green, 3 pcs',
        imageURL: '/static/images/products/fruit-n-veg/kiwi-green.jpg',
        description: 'Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.',
        price: 87,
        stock: 50,
        category: '5b6899953d1a866534f516e2',
        sku: 'fnw-kiwi-3',
        id: '5b6c6a7f01a7c38429530883',
      },
      {
        name: 'Apple - Washington, Regular, 4 pcs',
        imageURL: '/static/images/products/fruit-n-veg/apple.jpg',
        description: 'The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.',
        price: 187,
        stock: 50,
        category: '5b6899953d1a866534f516e2',
        sku: 'fnw-apple-4',
        id: '5b6c6aeb01a7c38429530884',
      }];
    ecommService.getProducts().then(products => {
      expect(products).toEqual(expectedResult);
    });
  });

  test('should add to cart', () => {
    const expectedResult = {
      response: 'Success',
      responseMessage: 'Product added to cart successfully',
    };
    ecommService.addToCart().then(products => {
      expect(products).toEqual(expectedResult);
    });
  });
});
