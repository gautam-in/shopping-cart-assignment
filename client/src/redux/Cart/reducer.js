import { CartActionTypes } from "./types";

import { addItemQty, decreaseItemQty } from "./../../utils/helpers";

const INITIAL_STATE = {
  showCart: false,
  inCartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch(type) {
    case CartActionTypes.SHOW_CART:
      return {
        ...state,
        showCart: !state.showCart
      };
    case CartActionTypes.ADD_TO_CART_SUCCESS: 
      return {
        ...state,
        inCartItems: [...state.inCartItems, { ...payload }]
      };
    case CartActionTypes.INCREMENT_ITEM_QTY:
      return {
        ...state,
        inCartItems: addItemQty(state.inCartItems, payload)
      }
    case CartActionTypes.DECREMENT_ITEM_QTY:
      return {
        ...state,
        inCartItems: decreaseItemQty(state.inCartItems, payload)
      }
    default:
      return state;
  }
}

export default cartReducer;