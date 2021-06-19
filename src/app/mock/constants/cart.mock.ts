import { ICartItem } from 'src/app/shared/models/cart-item.model';

export const mockCart: ICartItem = {
  product: {
    name: 'Fresho Kiwi - Green, 3 pcs',
    imageURL: '/static/images/products/fruit-n-veg/kiwi-green.jpg',
    description:
      'Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.',
    price: 87,
    stock: 50,
    category: '5b675e5e5936635728f9fc30',
    sku: 'fnw-kiwi-3',
    id: '5b6c6a7f01a7c38429530883',
  },
  quantity: 2,
};
