import { actionType } from "../actions/cartActions";

const INTIALSTATE = {
  cartItems: [],
  cartTotalQuantity: 0,
};

export const cartReducer = (state = INTIALSTATE, action) => {
  switch (action.type) {
    case actionType.ADD_TOCART:
      let newCart = [...state.cartItems];
      let itemIndex = state.cartItems.findIndex(
        (c) => c.id === action.payload.id
      );
      let currItem = state.cartItems[itemIndex];
      if (currItem) {
        currItem = { ...currItem, qty: currItem.qty + 1 };

        newCart[itemIndex] = currItem;
      } else {
        newCart = [...state.cartItems, { ...action.payload, qty: 1 }];
      }

      return {
        cartItems: newCart,
        cartTotalQuantity: state.cartTotalQuantity + 1,
      };
    case actionType.REMOVE_FROM_CART:
      let currCart = [...state.cartItems];
      let currIndex = state.cartItems.findIndex(
        (c) => c.id === action.payload.id
      );
      let currentItem = state.cartItems[currIndex];
      if (currentItem.qty === 1) {
        currCart = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        currCart = state.cartItems.map((c) =>
          c.id === action.payload.id ? { ...c, qty: c.qty - 1 } : c
        );
      }
      return {
        ...state,
        cartItems: currCart,
        cartTotalQuantity: state.cartTotalQuantity - 1,
      };
    default:
      return state;
  }
};
