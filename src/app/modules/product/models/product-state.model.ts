import { Product } from './product.model';

export interface ProductState {
  allProducts: Product[];
  currentProducts: Product[];
  error: string;
  loading: boolean;
  categoryWiseProducts: { [key: string]: Product[] };
  filterBy?: string | null;
}
