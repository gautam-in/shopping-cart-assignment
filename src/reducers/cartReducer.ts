import { ADD_TO_CART, REMOVE_ITEM_FORM_CART } from "../constants";
import { ICart } from "@typings/state/index";
import { actionTypes } from "@typings/action";

interface IAction {
  type: actionTypes;
  payload: ICart;
}

const initState: ICart = {
  totalAmount: 0,
  count: 0,
  items: {},
};

const getTotalAmount = (cartItems) => {
  let totalAmount = 0;
  Object.keys(cartItems).forEach((cartId) => {
    const cartItem = cartItems[cartId];
    totalAmount += cartItem.price * cartItem.count;
  });
  return totalAmount;
};

const getTotalItemsCount = (cartItems) => {
  let totalCount = 0;
  Object.keys(cartItems).forEach((cartId) => {
    const cartItem = cartItems[cartId];
    totalCount += cartItem.count;
  });
  return totalCount;
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id, count = 0 } = action.payload;
      const updatedCartItems = state.items;
      updatedCartItems[id] = action.payload;
      updatedCartItems[id].count = state.items[id].count
        ? state.items[id].count + 1
        : 1;

      return {
        ...state,
        items: { ...updatedCartItems },
        totalAmount: getTotalAmount(updatedCartItems),
        //count: getTotalItemsCount(updatedCartItems), //Use this If required to show actual total count instead of each category wise
        count: Object.keys(updatedCartItems).length,
      };
    }
    case REMOVE_ITEM_FORM_CART: {
      const updatedCartItems = state.items;
      delete updatedCartItems[action.payload.id];
      return {
        ...state,
        items: { ...updatedCartItems },
        totalAmount: getTotalAmount(updatedCartItems),
        count: Object.keys(updatedCartItems).length,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
