import { CartActionTypes } from "./cart.types";

export const setCurrentcart = () => ({
  type: CartActionTypes.TOGGLE_CART_MODAL,
});

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const addItem = (item) => (dispatch, getState) => {
  const { cartItems } = getState().cart;
  const updatedCart = addItemToCart(cartItems, item);
  dispatch({
    type: CartActionTypes.ADD_ITEM,
    payload: updatedCart,
  });
};

export const removeItem = (item) => (dispatch, getState) => {
  const { cartItems } = getState().cart;
  const updatedCart = removeItemFromCart(cartItems, item);
  dispatch({
    type: CartActionTypes.REMOVE_ITEM,
    payload: updatedCart,
  });
};

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});
