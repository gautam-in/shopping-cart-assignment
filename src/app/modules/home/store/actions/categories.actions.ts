import { createAction, props } from '@ngrx/store';
import { Category } from '../../models/category.model';
const comp = '[Category] ';
const FETCH_CATEGORY = comp + 'Category  Fetch';
const SET_CATEGORY = comp + 'Category  Set';
const FETCH_CATEGORY_ERROR = comp + 'Category  Error';

export const fetchCategory = createAction(FETCH_CATEGORY);
export const setCategories = createAction(
  SET_CATEGORY,
  props<{ payload: Category[] }>()
);
export const fetchCategoryError = createAction(
  FETCH_CATEGORY_ERROR,
  props<{ payload: string }>()
);
