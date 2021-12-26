import { SET_CURRENT_USER, cart } from "./consts";

// user actions
export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

// cart actions
export const toggleCartHidden = () => ({
  type: cart.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: cart.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: cart.REMOVE_ITEM,
  payload: item
});

export const clearItem = item => ({
  type: cart.CLEAR_ITEM,
  payload: item
});
