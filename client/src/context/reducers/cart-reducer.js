import { createContext } from "react";
import { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_CART } from "../constant";

export const initialState = {
  countItemsCount: 0,
  cartItems: [],
  toggle: false,
  cartTotal: 0,
};
export const GlobalState = createContext(initialState);

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        countItemsCount: state.countItemsCount + 1,
        cartItems: [...action.payload],
        cartTotal: state.cartItems.reduce(
          (acc, item) => acc + item.price,
          state.cartTotal
        ),
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        count: state.count + 1,
        cartItems: [...state.cartItems, ...action.payload],
      };
    }
    case TOGGLE_CART: {
      return {
        ...state,
        toggle: action.payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default cartReducer;
