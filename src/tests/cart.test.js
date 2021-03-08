// eslint-disable-next-line no-unused-vars
import { addItemCartSession } from '../scripts/cart';

describe('Cart tests', () => {
  test('it should add item to existing cart object', () => {
    const productsData = [
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

    const cartItems = {
      '5b6c6b7001a7c38429530885': {
        name: 'Fresho Pomegrante Peeled, 500 gm ', imageURL: '/static/images/products/fruit-n-veg/pomegrante.jpg', description: 'Pomegranate variety has a glossy, vibrant and soft ruby-red skin. The inside of the fruit is divided into compartments by thin white membranes.', price: 88, stock: 50, category: '5b6899953d1a866534f516e2', sku: 'fnw-pomegranate-500', id: '5b6c6b7001a7c38429530885', inCart: 2, totalPrice: 176,
      },
    };

    const id = '5b6c6aeb01a7c38429530884';

    const result = addItemCartSession(id, productsData, cartItems);
    expect(result[id].inCart).toBe(1);
  });
});
