import { ADD_ITEMS_TO_CART, REMOVE_ITEMS_FROM_CART } from "../actionType";

let cartState = {
  cartItems: [],
};

const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ADD_ITEMS_TO_CART:
      return {
        ...state,
        cartItems: action.payload,
      };

    case REMOVE_ITEMS_FROM_CART:
      return {
        ...state,
        cartItems: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;