import { ADD_CART_ITEM, REMOVE_CART_ITEM } from './actionTypes';

const addCartItem = (selectedItem) => {
  return {
    type: ADD_CART_ITEM,
    payload: selectedItem,
  };
};
const removeCartItem = (selectedItem) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: selectedItem,
  };
};

export const cartItemActions = {
  addCartItem,
  removeCartItem,
};
