import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from './actionTypes';

const getProductsLoading = () => {
  return {
    type: GET_PRODUCTS_LOADING,
  };
};

const getProductsSuccess = (data) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: data,
  };
};

const getProductsError = (error) => {
  return {
    type: GET_PRODUCTS_ERROR,
    payload: error,
  };
};

export const getProductsAction = {
  getProductsLoading,
  getProductsSuccess,
  getProductsError,
};
