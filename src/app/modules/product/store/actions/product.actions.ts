import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product.model';
const comp = '[Products] ';
const FETCH_PRODUCTS = comp + 'Products  Fetch';
const SET_PRODUCTS = comp + 'Products  Set';
const FETCH_PRODUCTS_ERROR = comp + 'Products  Error';
const FILTER_BY = comp + ' FilterBy';
const REMOVE_FILTER_BY = comp + ' FilterBy Removed';

export const fetchProducts = createAction(FETCH_PRODUCTS);

export const setProducts = createAction(
  SET_PRODUCTS,
  props<{ payload: Product[] }>()
);

export const fetchProductsError = createAction(
  FETCH_PRODUCTS_ERROR,
  props<{ payload: string }>()
);

export const removeFilterBy = createAction(REMOVE_FILTER_BY);

export const filterBy = createAction(FILTER_BY, props<{ payload: string }>());
