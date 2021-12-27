import { ProductsActionTypes } from "./types";

// PRODUCTS

export const fetchProducts = () => {
  return {
    type: ProductsActionTypes.FETCH_PRODUCTS_START
  };
}

export const fetchProductsSuccess = products => {
  return {
    type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products
  };
}