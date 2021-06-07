import { Product } from './product.model';

export interface ProductState {
  allProducts: Product[];
  currentProducts: Product[];
  error: string;
  loading: boolean;
  categoryWiseProducts: Map<string, Product[]>;
  filterBy?: string | null;
}
