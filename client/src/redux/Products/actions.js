import { store } from './../store';
import { filterProducts } from './../helpers';
import { ProductsActionTypes } from "./types";

// PRODUCTS

export const fetchProducts = filterId => {
  return {
    type: ProductsActionTypes.FETCH_PRODUCTS_START,
    payload: filterId
  };
}

export const fetchProductsSuccess = productsAndFilterId => {
  const { products, filterId } = productsAndFilterId;
  const categoryId = store?.getState()?.home?.categories?.find(item => item.key === filterId)?.id || '';
  return {
    type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: filterProducts(products, categoryId)
  };
}