import { Action } from '@ngrx/store';
const comp = '[Products] ';
export const FETCH_PRODUCTS = comp + 'Products  Fetch';
export const SET_PRODUCTS = comp + 'Products  Set';
export const APPLY_CATEGORY_FILTER = comp + 'Category filter set';
export const REMOVE_CATEGORY_FILTER = comp + 'Category filter removed';
export const FETCH_PRODUCTS_ERROR = comp + 'Products  Error';

export interface Product {
  name: string;
  imageURL: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  sku: string;
  id: string;
}

export class FetchProducts implements Action {
  readonly type = FETCH_PRODUCTS;
}

export class SetProducts implements Action {
  readonly type = SET_PRODUCTS;

  constructor(public payload: Product[]) {}
}

export class FetchProductsError implements Action {
  readonly type = FETCH_PRODUCTS_ERROR;
  constructor(public payload: string) {}
}

export class ApplyCategoryFilter implements Action {
  readonly type = APPLY_CATEGORY_FILTER;
  constructor(public payload: string[]) {}
}

export class RemoveCategoryFilter implements Action {
  readonly type = REMOVE_CATEGORY_FILTER;
  constructor(public payload: string[]) {}
}

export type ProductsActions = FetchProducts | FetchProductsError | SetProducts;
