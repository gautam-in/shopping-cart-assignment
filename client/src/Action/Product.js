import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  PRODUCTS_URL,
} from "./ActionType.js";

export const getProductsRequest = () => {
  return {
    type: GET_PRODUCTS_REQUEST,
  };
};

export const getProductsSuccess = (products) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const getProductsFailure = (error) => {
  return {
    type: GET_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const getProducts = () => {
  return (dispatch) => {
    dispatch(getProductsRequest());
    fetch(PRODUCTS_URL)
      .then((res) => res.json())
      .then((data) => {
        dispatch(getProductsSuccess(data));
      })
      .catch((err) => {
        dispatch(getProductsFailure(err));
      });
  };
};
