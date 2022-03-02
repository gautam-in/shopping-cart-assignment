import CartActionTypes from "./cart.types";
import { cartAddItem, itemTotal, removeItem } from "./cart.utils";

const initialState = {
  cartItems: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.Add_Item:
      return {
        ...state,
        cartItems: itemTotal(cartAddItem(state.cartItems, action.payload)),
      };
    case CartActionTypes.Remove_Item:
      return {
        ...state,
        cartItems: itemTotal(removeItem(state.cartItems, action.payload)),
      };
    default:
      return state;
  }
};

export default CartReducer;
