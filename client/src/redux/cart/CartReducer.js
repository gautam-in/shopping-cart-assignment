import { UPDATE_CART } from "./CartActionTypes";

const cart = {
  data: {},
};

const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case UPDATE_CART:
      return {
        data: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
