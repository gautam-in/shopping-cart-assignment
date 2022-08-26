import { ADD_TO_CART } from "./types";

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  payload: id,
});
