import * as types from "./productsTypes";
import * as service from "../../pages/services";

import { products } from "../../../../server/productsList";

export const fetchProductsRequest = () => {
  return {
    type: types.FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: types.FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProductsError = (error = "Nothing") => {
  return {
    type: types.FETCH_PRODUCTS_ERROR,
    payload: error,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest);
    /* products()
      .then((data) => {
        dispatch(fetchProductsSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchProductsError(err));
      }); */
    console.log("env ", process.env.NODE_ENV);
    service
      .getProducts()
      .then((data) => {
        dispatch(fetchProductsSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchProductsError(err));
      });
  };
};
