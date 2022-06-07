import { CART_ACTIONS } from "./cart.types";
import { createAction } from "../../../utils/reducer/reducer.util";

//action helpers
const addCartItems = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove?.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove?.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove?.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

//actions
export const addItemsToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItems(cartItems, productToAdd);
  return createAction(CART_ACTIONS.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTIONS.SET_CART_ITEMS, newCartItems);
};

export const deleteCartItem = (cartItems, cartToDelete) => {
  const newCartItems = cartItems.filter(
    (cartItem) => cartItem.id !== cartToDelete.id
  );
  return createAction(CART_ACTIONS.SET_CART_ITEMS, newCartItems);
};

export const setIsCartOpen = (boolean) => {
  return createAction(CART_ACTIONS.SET_IS_OPEN_CART, boolean);
};
