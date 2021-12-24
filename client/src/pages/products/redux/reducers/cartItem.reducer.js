import { ADD_CART_ITEM, REMOVE_CART_ITEM } from '../actions/actionTypes';

const initialState = {
  item: 0,
  cartItemData: [],
};

export const cartItemReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      if (state.cartItemData.find((cartItem) => cartItem.id === action.payload.id)) {
        return {
          ...state,
          item: state.item + 1,
          cartItemData: state.cartItemData.map((cartItem) => {
            if (cartItem.id === action.payload.id) {
              return { ...cartItem, quantity: cartItem.quantity + 1 };
            }
            return cartItem;
          }),
        };
      } else {
        return {
          ...state,
          item: state.item + 1,
          cartItemData: state.cartItemData.concat({
            ...action.payload,
            quantity: 1,
          }),
        };
      }
    case REMOVE_CART_ITEM:
      const removeItem = state.cartItemData.find((cartItem) => cartItem.id === action.payload.id);
      if (removeItem) {
        if (removeItem.quantity > 1) {
          return {
            ...state,
            item: state.item - 1,
            cartItemData: state.cartItemData.map((cartItem) => {
              if (cartItem.id === action.payload.id) {
                return { ...cartItem, quantity: cartItem.quantity - 1 };
              }
              return cartItem;
            }),
          };
        } else {
          return {
            ...state,
            item: state.item - 1,
            cartItemData: state.cartItemData.filter((cartItem) => cartItem.id !== action.payload.id),
          };
        }
      }
      break;
    default:
      return state;
  }
};
