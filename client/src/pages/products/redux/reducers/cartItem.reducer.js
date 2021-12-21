import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
} from "../actions/actionTypes";

const initialState = {
  item: 0,
  cartItemData: [],
  total: 0,
};

export const cartItemReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      if (
        state.cartItemData.find((e) => e.id === action.payload.selectedItem.id)
      ) {
        return {
          ...state,
          item: state.item + 1,
          cartItemData: state.cartItemData.map((ele) => {
            if (ele.id === action.payload.selectedItem.id) {
              return { ...ele, quantity: ele.quantity + 1 };
            }
            return ele;
          }),
        };
      } else {
        return {
          ...state,
          item: state.item + 1,
          cartItemData: state.cartItemData.concat({
            ...action.payload.selectedItem,
            quantity: 1,
          }),
        };
      }
    case REMOVE_CART_ITEM:
      const findItem = state.cartItemData.find(
        (element) => element.id === action.payload.selectedItem.id
      );
      if (findItem) {
        if (findItem.quantity > 1) {
          return {
            ...state,
            item: state.item - 1,
            cartItemData: state.cartItemData.map((ele) => {
              if (ele.id === action.payload.selectedItem.id) {
                return { ...ele, quantity: ele.quantity - 1 };
              }
              return ele;
            }),
          };
        } else {
          return {
            ...state,
            item: state.item - 1,
            cartItemData: state.cartItemData.filter(
              (ele) => ele.id !== action.payload.selectedItem.id
            ),
          };
        }
      }
      break;
    default:
      return state;
  }
};
