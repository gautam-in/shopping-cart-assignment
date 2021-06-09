import { Observable, of } from 'rxjs';
import { IProduct } from 'src/app/shared/models/product.model';

export class MockProductService {
  getAllProducts(): Observable<IProduct[]> {
    return of([
      {
        category: '5b6899953d1a866534f516e2',
        description: 'Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.',
        id: '5b6c6a7f01a7c38429530883',
        imageURL: '/static/images/products/fruit-n-veg/kiwi-green.jpg',
        name: 'Fresho Kiwi - Green, 3 pcs',
        price: 23,
        sku: 'fnw-kiwi-3',
        stock: 23,
      },
    ]);
  }
}
