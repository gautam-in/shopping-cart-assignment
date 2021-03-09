import { Products } from './Products';

export interface CartProducts extends Products {
  count: number;
}
