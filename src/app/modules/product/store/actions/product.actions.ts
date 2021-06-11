import { Action } from '@ngrx/store';
import { Product } from '../../models/product.model';
const comp = '[Products] ';
export const FETCH_PRODUCTS = comp + 'Products  Fetch';
export const SET_PRODUCTS = comp + 'Products  Set';
export const APPLY_CATEGORY_FILTER = comp + 'Category filter set';
export const REMOVE_CATEGORY_FILTER = comp + 'Category filter removed';
export const FETCH_PRODUCTS_ERROR = comp + 'Products  Error';
export const FILTER_BY = comp + ' FilterBy';
export const REMOVE_FILTER_BY = comp + ' FilterBy Removed';

export class FetchProducts implements Action {
  readonly type = FETCH_PRODUCTS;
  constructor(public payload?: any) {}
}

export class SetProducts implements Action {
  readonly type = SET_PRODUCTS;

  constructor(public payload: Product[]) {}
}

export class FetchProductsError implements Action {
  readonly type = FETCH_PRODUCTS_ERROR;
  constructor(public payload: string) {}
}

export class RemoveFilterBy implements Action {
  readonly type = REMOVE_FILTER_BY;
  constructor(public payload?: any) {}
}

export class FilterBy implements Action {
  readonly type = FILTER_BY;
  constructor(public payload: string) {}
}
export type ProductsActions =
  | FetchProducts
  | FetchProductsError
  | SetProducts
  | FilterBy
  | RemoveFilterBy;
