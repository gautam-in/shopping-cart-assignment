import { ADD_TO_CART } from "./types";

export const addToCart = (cartItems, product) => {
  return {
    type: ADD_TO_CART,
    payload: { cartItems: cartItems, productToAdd: product },
  };
};
