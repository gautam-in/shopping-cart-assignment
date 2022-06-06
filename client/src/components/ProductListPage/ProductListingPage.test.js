import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from '../test-utils'
import ProductListingPage from './ProductListingPage';


// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
const product = [
    {
      "name": "Fresho Kiwi - Green, 3 pcs",
      "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
      "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
      "price": 87,
      "stock": 50,
      "category": "5b6899953d1a866534f516e2",
      "sku": "fnw-kiwi-3",
      "id": "5b6c6a7f01a7c38429530883"
    },
    {
      "name": "Apple - Washington, Regular, 4 pcs",
      "imageURL": "/static/images/products/fruit-n-veg/apple.jpg",
      "description": "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
      "price": 187,
      "stock": 50,
      "category": "5b6899953d1a866534f516e2",
      "sku": "fnw-apple-4",
      "id": "5b6c6aeb01a7c38429530884"
    },
    {
      "name": "Fresho Pomegrante Peeled, 500 gm ",
      "imageURL": "/static/images/products/fruit-n-veg/pomegrante.jpg",
      "description": "Pomegranate variety has a glossy, vibrant and soft ruby-red skin. The inside of the fruit is divided into compartments by thin white membranes.",
      "price": 88,
      "stock": 50,
      "category": "5b6899953d1a866534f516e2",
      "sku": "fnw-pomegranate-500",
      "id": "5b6c6b7001a7c38429530885"
    }];
    const categories = [
        {
          "name": "Beverages",
          "key": "beverages",
          "description": "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
          "enabled": true,
          "order": 3,
          "imageUrl": "/static/images/category/beverages.png",
          "id": "5b675e5e5936635728f9fc30"
        },
        {
          "name": "Bakery Cakes and Dairy",
          "key": "bakery-cakes-dairy",
          "description": "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
          "enabled": true,
          "order": 2,
          "imageUrl": "/static/images/category/bakery.png",
          "id": "5b6899123d1a866534f516de"
        },
        {
          "name": "Beauty and Hygiene",
          "key": "beauty-hygiene",
          "description": "Buy beauty and personal care products online in India at best prices.",
          "enabled": true,
          "order": 4,
          "imageUrl": "/static/images/category/beauty.png",
          "id": "5b68994e3d1a866534f516df"
        },
        {
          "name": "Baby Care",
          "key": "baby",
          "description": "Shop online for Baby Products, Diapers, Skin Care Products,etc.",
          "enabled": true,
          "order": 5,
          "imageUrl": "/static/images/category/baby.png",
          "id": "5b6899683d1a866534f516e0"
        },
        {
          "name": "Fruits & Vegetables",
          "key": "fruit-and-veg",
          "description": "A variety of fresh fruits and vegetables.",
          "enabled": true,
          "order": 1,
          "imageUrl": "/static/images/category/fruits.png",
          "id": "5b6899953d1a866534f516e2"
        }
      ];
export const handlers = [
  rest.get('http://localhost:3000/categories', (req, res, ctx) => {
    //   console.log("99000",res(ctx.json(categories)));
    return res(ctx.json(categories), ctx.delay(150))
  }),
  rest.get('http://localhost:3000/products', (req, res, ctx) => {
    // console.log("qqqqq",res(ctx.json(product)));
    return res(ctx.json(product), ctx.delay(150))
  })
]
// console.log("abhijeet",rest.get('http://localhost:3000/products', (req, res, ctx) => {
//     console.log("test",req, res, ctx);
//     return res(ctx.json('John Smith'), ctx.delay(150))
//   }))
const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

test('fetches & receives a user after clicking the fetch user button', async () => {
  jest.useFakeTimers();
 const {getByTestId}= render(<ProductListingPage />)
 jest.runAllTimers();
 const afterTimer = getByTestId('plp-main');
// expect(afterTimer.textContent).toEqual("Buy Now");

})