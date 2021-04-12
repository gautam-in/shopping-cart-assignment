/* eslint-disable import/no-extraneous-dependencies */
// src/mocks/handlers.js
import {rest} from 'msw';

const path = require('path');

require('dotenv').config({path: path.resolve(__dirname, './.env')});

const handlers = [
  rest.get(`${process.env.Base_URL}/banners`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          bannerImageUrl: 'offer1.jpg',
          bannerImageAlt: 'Independence Day Deal - 25% off on shampoo',
          isActive: true,
          order: 1,
          id: '5b6c38156cb7d770b7010ccc',
        },
        {
          bannerImageUrl: 'offer2.jpg',
          bannerImageAlt: 'Independence Day Deal - Rs120 off on surf',
          isActive: true,
          order: 2,
          id: '5b6c38336cb7d770b7010ccd',
        },
      ]),
    );
  }),
  rest.get(`${process.env.Base_URL}/categories`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: 'Beverage',
          key: 'beverage',
          enabled: true,
          description:
            'Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ',
          order: 3,
          imageUrl: 'beverages.png',
          id: '5b675e5e5936635728f9fc30',
        },
        {
          name: 'Bakery Cakes and Dairy',
          key: 'bakery-cakes-dairy',
          enabled: true,
          description:
            'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.',
          order: 2,
          imageUrl: 'bakery.png',
          id: '5b6899123d1a866534f516de',
        },
      ]),
    );
  }),
  rest.get(`${process.env.Base_URL}/products`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: 'Fresho Kiwi - Green, 3 pcs',
          imageURL: 'fruit-n-veg/kiwi-green.jpg',
          description:
            'Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.',
          price: 87,
          stock: 50,
          category: '5b6899953d1a866534f516e2',
          sku: 'fnw-kiwi-3',
          id: '5b6c6a7f01a7c38429530883',
        },
        {
          name: 'Apple - Washington, Regular, 4 pcs',
          imageURL: 'fruit-n-veg/apple.jpg',
          description:
            'The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.',
          price: 187,
          stock: 50,
          category: '5b6899953d1a866534f516e2',
          sku: 'fnw-apple-4',
          id: '5b6c6aeb01a7c38429530884',
        },
      ]),
    );
  }),
];

export default handlers;
