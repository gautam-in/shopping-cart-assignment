/* eslint-disable no-console */
import { actions } from "./action";

export const initialState = {
  cart: [],
  products: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_CART_COUNT:
      return {
        ...state,
        cart: [...state.cart, action.productId],
      };
    case actions.REMOVE_CART_COUNT: {
      const localCart = [...state.cart];
      let index = localCart.indexOf(action.productId);
      if (index > -1) {
        localCart.splice(index, 1);
      }
      return {
        ...state,
        cart: localCart,
      };
    }
    case actions.ADD_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };
    default:
      return state;
  }
};
