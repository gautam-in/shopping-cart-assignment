import axios from "axios";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "./productTypes";

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get("http://localhost:5000/products")
      .then((products) => {
          console.log(products)
        dispatch(fetchProductsSuccess(products.data));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error));
      });
  };
};

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (product) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: product,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};
