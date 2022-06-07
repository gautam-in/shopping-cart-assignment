import { CART_ACTIONS } from "./cart.types";

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
  cartCount: 0,
  totalCartPrice: 0,
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS.SET_CART_ITEMS:
      return { ...state, cartItems: payload };
    case CART_ACTIONS.SET_IS_OPEN_CART:
      return { ...state, isCartOpen: payload };
    default:
      return state;
  }
};
