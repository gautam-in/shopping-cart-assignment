import { CartActionTypes } from './types';

// SHOW CART

export const showCart = () => {
  return {
    type: CartActionTypes.SHOW_CART
  };
}

// ADD TO CART

export const addToCart = item => {
  return {
    type: CartActionTypes.ADD_TO_CART_START,
    payload: item
  };
}

export const addToCartSuccess = item => {
  return {
    type: CartActionTypes.ADD_TO_CART_SUCCESS,
    payload: item
  }
}

// MODIFY ITEM QTY

export const incrementQty = id => {
  return {
    type: CartActionTypes.INCREMENT_ITEM_QTY,
    payload: id
  }
}

export const decrementQty = id => {
  return {
    type: CartActionTypes.DECREMENT_ITEM_QTY,
    payload: id
  }
}



