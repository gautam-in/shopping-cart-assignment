import {
  ADD_CART,
  ADD_CART_SUCCESS,
  DELETE_CART,
  DELETE_CART_SUCCESS,
} from "./cart.action";

const initialState = {
  cartItems: [],
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      return { ...state };
    case ADD_CART_SUCCESS:
      const item = action.payload;
      let existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingCartItem) {
        let cartItems = state.cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        return {
          ...state,
          cartItems,
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...item, quantity: 1 }],
      };

    case DELETE_CART:
      return { ...state };
    case DELETE_CART_SUCCESS:
      const itemToRemove = action.payload;
      let cartItems = state.cartItems.map((cartItem) =>
        cartItem.id === itemToRemove.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity ? cartItem.quantity - 1 : 0,
            }
          : cartItem
      );
      return {
        ...state,
        cartItems,
      };
    default:
      return state;
  }
}
