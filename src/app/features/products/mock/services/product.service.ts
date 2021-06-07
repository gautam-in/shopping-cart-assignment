import { Observable, of } from 'rxjs';
import { IProduct } from 'src/app/shared/models/product.model';

export class MockProductService {
  getAllProducts(): Observable<IProduct[]> {
    return of([
      {
        category: 'string',
        description: 'string',
        id: 'string',
        imageURL: 'string',
        name: 'string',
        price: 23,
        sku: 'string',
        stock: 23,
      },
    ]);
  }
}
