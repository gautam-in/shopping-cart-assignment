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
  rest.get('http://localhost:5000/products', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: 'Tata Tea Gold Leaf Tea, 500 gm',
          imageURL: '/static/images/products/beverages/tata-tea.jpg',
          description:
            'Tata Tea Gold is a unique blend of fine Assam tea leaves with special 15%  long leaf.',
          price: 165,
          stock: 50,
          category: '5b675e5e5936635728f9fc30',
          sku: 'bev-tata-tea-500',
          id: '5b6c6f4a01a7c3842953088c',
        },
        {
          name: 'Red Label Tea, 500 gm Carton',
          imageURL: '/static/images/products/beverages/red-label.jpg',
          description:
            'Brooke Bond Red Label is one of Indias largest selling packaged tea brands. Brooke Bond Red Label Tea is a blend CTC tea with best quality leaves.',
          price: 205,
          stock: 50,
          category: '5b675e5e5936635728f9fc30',
          sku: 'bev-red-label-500',
          id: '5b6c6f8301a7c3842953088d',
        },
        {
          name: 'Bournvita Pro-Health Drink - Chocolate, 2x750 gm',
          imageURL: '/static/images/products/beverages/bournvita.jpg',
          description:
            'Cadbury Bournvita is a delicious chocolate health drink which is enriched with Vitamin (D,B2,B9,B12). It combines the great taste of chocolate, and goodness of essential nutrients that aid growth and development.',
          price: 572,
          stock: 50,
          category: '5b675e5e5936635728f9fc30',
          sku: 'bev-bournvita-750',
          id: '5b6c6fbf01a7c3842953088e',
        },
      ]),
    )
  }),
]
