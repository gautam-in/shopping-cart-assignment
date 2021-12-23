import { POST_CART_ITEM_ERROR, POST_CART_ITEM_LOADING, POST_CART_ITEM_SUCCESS } from './actionTypes';

const postCartItemLoading = (product) => {
  return {
    type: POST_CART_ITEM_LOADING,
    payload:product
  };
};

const postCartItemSuccess = (data) => {
  return {
    type: POST_CART_ITEM_SUCCESS,
    payload: data,
  };
};

const postCartItemError = (error) => {
  return {
    type: POST_CART_ITEM_ERROR,
    payload: error,
  };
};

export const postCartItemActions = {
  postCartItemLoading,
  postCartItemSuccess,
  postCartItemError,
};
