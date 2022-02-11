import { TOGGLE_CART_HIDDEN, ADD_ITEM, DECREMENT } from './cart.types';

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const decrement = (item) => ({
  type: DECREMENT,
  payload: item,
});
