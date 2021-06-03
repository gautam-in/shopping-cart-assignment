import { IProduct } from '../products/models/product.model';

export class ICartItem {
  constructor(public product: IProduct, public quantity: number) {}
}
