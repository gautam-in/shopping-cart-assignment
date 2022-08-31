import { ADD_TO_CART, UPDATE_CART } from "./types";

export const addToCart = (cartItems, product) => {
  return {
    type: ADD_TO_CART,
    payload: { cartItems: cartItems, productToAdd: product },
  };
};

export const updateCartItems = (cartItems) => {
  return {
    type: UPDATE_CART,
    payload: cartItems,
  };
};
