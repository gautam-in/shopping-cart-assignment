import { ActionTypes } from "../constants/action-types";

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  //   console.log("reducer", type, payload);
  switch (type) {
    case ActionTypes.SET_CART_ITEMS:
      return { ...state, cartItems: payload };
    case ActionTypes.REMOVE_SELECTED_CART_ITEMS:
      return { ...state, cartItems: payload };
    case ActionTypes.ADD_SELECTED_CART_ITEMS:
      return { ...state, cartItems: payload };
    default:
      return state;
  }
};
