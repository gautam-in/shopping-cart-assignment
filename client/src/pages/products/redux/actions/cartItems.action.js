import { ADD_CART_ITEM, REMOVE_CART_ITEM } from './actionTypes';

const addCartItem = (selectedItem, productData) => {
  return {
    type: ADD_CART_ITEM,
    payload: { selectedItem, productData },
  };
};
const removeCartItem = (selectedItem, productData) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: { selectedItem, productData },
  };
};

export const cartItemActions = {
  addCartItem,
  removeCartItem,
};
