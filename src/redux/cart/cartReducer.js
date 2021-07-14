import { ADD_REMOVE_TO_CART } from "./actionType";

let cartState = {
  cartItems: [],
};

const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ADD_REMOVE_TO_CART:
      return {
        ...state,
        cartItems: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
