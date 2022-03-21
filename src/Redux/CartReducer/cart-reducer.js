import cartActionTypes from "./cart-actiontypes";

const INITIAL_STATE = {
  show_cart: false,
  cart_items: [],
  cart_error: "",
};

const setCartStatus = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.SHOW_CART:
      return { ...state, show_cart: !state.show_cart };

    case cartActionTypes.ADD_CART:
      let idExists = state.cart_items.find((p) => p.id === action.payload.id);
      if (!!idExists) {
        state.cart_items = state.cart_items.map((id) =>
          id.id === action.payload.id
            ? { ...id, quantity: id.quantity + 1 }
            : id
        );
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cart_items: [...state.cart_items, action.payload],
        };
      }

    case cartActionTypes.REMOVE_CART:
      let itemExists = state.cart_items.find((p) => p.id === action.payload.id);
      if (!!itemExists) {
        if (action.payload.quantity <= 1) {
          let remItems = state.cart_items.filter(
            (item) => item.id !== action.payload.id
          );
          return { ...state, cart_items: [...remItems] };
        } else {
          state.cart_items = state.cart_items.map((id) =>
            id.id === action.payload.id
              ? { ...id, quantity: id.quantity - 1 }
              : id
          );
          return {
            ...state,
          };
        }
      } else {
        return {
          ...state,
          cart_items: [...state.cart_items, action.payload],
        };
      }

    case cartActionTypes.ERROR_CART:
      return {
        ...state,
        cart_error: action.payload,
      };

    default:
      return state;
  }
};

export default setCartStatus;
