import { Category } from './category.model';

export interface CategoryState {
  categories: Category[];
  error: string;
  loading: boolean;
}
