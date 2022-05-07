import {
    OPEN_CART_MODAL,
    CLOSE_CART_MODAL,
    ADD_CART_ITEM,
    REMOVE_CART_ITEM
  } from './Types';

import { addItemsToCart, removeItemsFromCart } from '../../utils'
  
  export default (state, action) => {
    switch (action.type) {
      case OPEN_CART_MODAL:
        return {
          ...state,
          cartModalState: true,
        };
      case CLOSE_CART_MODAL:
        return {
          ...state,
          cartModalState: false,
        };
      case ADD_CART_ITEM:
        return {
          ...state,
          cartItems: addItemsToCart(state.cartItems, action.payload)
        }
      case REMOVE_CART_ITEM:
        return {
          ...state,
          cartItems: removeItemsFromCart(state.cartItems, action.payload)
        }
      default:
        return state;
    }
  };