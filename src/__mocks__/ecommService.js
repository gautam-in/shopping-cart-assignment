/* eslint-disable class-methods-use-this */
import 'regenerator-runtime/runtime';

export default class EcommService {
  async getCategories() {
    return Promise.resolve([
      {
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
      },
    ]);
  }

  async getProducts() {
    return Promise.resolve([
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
      }]);
  }

  // eslint-disable-next-line no-unused-vars
  async addToCart(_id) {
    return Promise.resolve({
      response: 'Success',
      responseMessage: 'Product added to cart successfully',
    });
  }
}
