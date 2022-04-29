import { CART_ACTION_TYPES } from '../../actionTypes/cart';

export const CART_STATE = {
  cart: [],
};

export const cartReducer = (
  state = CART_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.ADD_TO_CART:
      return {
        ...state,
        cart: payload,
      };
    case CART_ACTION_TYPES.UPDATE_QUANTITY:
      return {
        ...state,
        cart: payload,
      };
    default:
      return state;
  }
};