import {
  ADD_PRODUCT_TO_CART,
  CLOSE_CART_MODAL,
  DECREMENT_PRODUCT_QUANTITY_IN_CART,
  INCREMENT_PRODUCT_QUANTITY_IN_CART,
  OPEN_CART_MODAL,
  REMOVE_PRODUCT_FROM_CART,
} from "../constants/constants";

export const addProductToCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: product,
    });
  };
};

export const closeCartModal = () => {
  return (dispatch) => {
    dispatch({
      type: CLOSE_CART_MODAL,
    });
  };
};

export const decrementProductQuantityInCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: DECREMENT_PRODUCT_QUANTITY_IN_CART,
      payload: product,
    });
  };
};

export const incrementProductQuantityInCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: INCREMENT_PRODUCT_QUANTITY_IN_CART,
      payload: product,
    });
  };
};

export const openCartModal = () => {
  return (dispatch) => {
    dispatch({
      type: OPEN_CART_MODAL,
    });
  };
};

export const removeProductFromCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_PRODUCT_FROM_CART,
      payload: product,
    });
  };
};
