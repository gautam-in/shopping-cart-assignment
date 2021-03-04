/* eslint-disable arrow-parens */
const { EcommService } = require('../__mocks__/ecommService');

describe('EcommService tests', () => {
  let ecommService;

  beforeAll(() => {
    ecommService = new EcommService();
  });

  test('should invalidate incorrect email id', () => {
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
});
