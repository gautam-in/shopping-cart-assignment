import {rest} from 'msw'

export const handlers = [
  rest.get('http://localhost:5000/banners', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          bannerImageUrl: '/static/images/offers/offer1.jpg',
          bannerImageAlt: 'Happy Day Deal - 25% off on shampoo',
          isActive: true,
          order: 1,
          id: '5b6c38156cb7d770b7010ccc',
        },
      ]),
    )
  }),
  rest.get('http://localhost:5000/categories', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: 'Beverages',
          key: 'beverages',
          description:
            'Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ',
          enabled: true,
          order: 3,
          imageUrl: '/static/images/category/beverages.png',
          id: '5b675e5e5936635728f9fc30',
        },
      ]),
    )
  }),
]
