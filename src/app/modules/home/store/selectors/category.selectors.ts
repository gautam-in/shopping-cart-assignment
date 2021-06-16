import { createFeatureSelector } from '@ngrx/store';
import { CategoryState } from '../../models/category-state.model';

export const selectCategoryState =
  createFeatureSelector<CategoryState>('categories');
