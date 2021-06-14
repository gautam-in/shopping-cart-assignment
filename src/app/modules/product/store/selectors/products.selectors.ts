import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from '../../models/product-state.model';

export const selectProductState =
  createFeatureSelector<ProductState>('products');
