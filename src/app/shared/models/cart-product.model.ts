import { Product } from 'src/app/modules/product/models/product.model';

export interface CartProductModel extends Product {
  productPrice: number;
  count: number;
}
