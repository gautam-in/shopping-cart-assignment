import {
  ADD_TO_CART,
  CLEAR_CART,
  DELETE_CART_ITEM,
  TOGGLE_CART,
} from "../actions/types";

const cartState = {
  showCart: false,
  cartItems: [],
  cartQuantity: 0,
  cartTotal: 0,
};

export const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return { ...state, showCart: !state.showCart };

    case CLEAR_CART:
      return cartState;

    case DELETE_CART_ITEM:
      return state.cartItems.find((item) => item.id === action.payload.id)
        .quantity < 2
        ? {
            ...state,
            cartItems: state.cartItems.filter(
              (item) => item.id !== action.payload.id
            ),
            cartQuantity: state.cartQuantity - 1,
            cartTotal: state.cartTotal - action.payload.price,
          }
        : {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: --item.quantity }
                : item
            ),
            cartQuantity: state.cartQuantity - 1,
            cartTotal: state.cartTotal - action.payload.price,
          };

    case ADD_TO_CART:
      return state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      ) > -1
        ? {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: ++item.quantity }
                : item
            ),
            cartQuantity: state.cartQuantity + 1,
            cartTotal: state.cartTotal + action.payload.price,
          }
        : {
            ...state,
            cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
            cartQuantity: state.cartQuantity + 1,
            cartTotal: state.cartTotal + action.payload.price,
          };

    default:
      return state;
  }
};
