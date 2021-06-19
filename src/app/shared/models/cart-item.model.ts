import { IProduct } from './product.model';

export class ICartItem {
  constructor(public product: IProduct, public quantity: number) {}
}
