import {
  ADD_PRODUCT_TO_CART,
  DECREMENT_PRODUCT_QUANTITY_IN_CART,
  INCREMENT_PRODUCT_QUANTITY_IN_CART,
  REMOVE_PRODUCT_FROM_CART,
  TOGGLE_CART_MODAL,
} from "../constants/constants";

export const addProductToCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: product,
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

export const removeProductFromCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_PRODUCT_FROM_CART,
      payload: product,
    });
  };
};

export const toggleCartModal = () => {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_CART_MODAL,
    });
  };
};
