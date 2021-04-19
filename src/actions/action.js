import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '../types';

export const fetchProductsDataRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST
});

export const fetchProductDataSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products
});

export const fetchProductsDataFailure = () => ({
  type: FETCH_PRODUCTS_FAILURE
});
