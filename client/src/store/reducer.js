import * as actionTypes from "./action-types";

const initalState = {
  showCart: false,
  cart: [],
};

const rootReducer = (state = initalState, { type, payload }) => {
  let updatedCart;
  let updatedItemIndex;
  switch (type) {
    case actionTypes.TOGGLE_CART:
      return {
        ...state,
        showCart: !state.showCart,
      };
    case actionTypes.CLOSE_CART:
      return {
        ...state,
        showCart: false,
      };
    case actionTypes.ADD_TO_CART:
      if (state.cart.some((item) => item.id === payload.id)) {
        const updatedCart = state.cart.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        return {
          ...state,
          cart: updatedCart,
        };
      }
      return {
        ...state,
        cart: [...state.cart, payload],
      };

    case actionTypes.INCREMENT_CART_ITEM_QUANTITY:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex((item) => item.id === payload);
      const incrementedItem = {
        ...updatedCart[updatedItemIndex],
      };

      incrementedItem.quantity++;

      updatedCart[updatedItemIndex] = incrementedItem;

      return { ...state, cart: updatedCart };
    case actionTypes.DECREMENT_CART_ITEM_QUANTITY:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex((item) => item.id === payload);
      if (updatedCart[updatedItemIndex].quantity === 1) {
        updatedCart = state.cart.filter((item) => item.id !== payload);
        return { ...state, cart: updatedCart };
      }
      const decrementedItem = {
        ...updatedCart[updatedItemIndex],
      };
      decrementedItem.quantity--;
      updatedCart[updatedItemIndex] = decrementedItem;

      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};

export default rootReducer;
