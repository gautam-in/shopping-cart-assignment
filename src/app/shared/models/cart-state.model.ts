import { CartProductModel } from './cart-product.model';

export interface CartState {
  products: CartProductModel[];
  totalPrice?: number;
  totalDiscount?: number;
  tax?: number;
}
