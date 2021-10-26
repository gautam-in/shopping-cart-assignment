import {
  REMOVE_FROM_CART,
  CREATE_ADD_TO_CART_SUCCESS,
  CREATE_ADD_TO_CART_FAILURE,
} from "./actionTypes";

export const createAddToCartSuccess = (cartProduct) => ({
  type: CREATE_ADD_TO_CART_SUCCESS,
  cartProduct,
});

export const createAddToCartFailure = () => ({
  type: CREATE_ADD_TO_CART_FAILURE,
});

export const removeFromCart = (cartProduct) => ({
  type: REMOVE_FROM_CART,
  cartProduct,
});
