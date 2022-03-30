import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "../constants";

export const addToCart = (payload) => ({ type: ADD_PRODUCT_TO_CART, payload });
export const removeFromCart = (payload) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload,
});
