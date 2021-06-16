import { createFeatureSelector } from '@ngrx/store';
import { ProductState } from '../../models/product-state.model';

export const selectProductState =
  createFeatureSelector<ProductState>('products');
