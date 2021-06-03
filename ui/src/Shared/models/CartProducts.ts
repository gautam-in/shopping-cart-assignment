import { Products } from './Products';

export interface CartProducts  {
  count: number;
  name?: string;
  imageURL?: string;
  description?: string;
  price?: number;
  stock?: number;
  category?: string;
  sku?: string;
  id?: string;
}
