import { ActionTypes } from "../constants/action-types";

const addItemsToCartHelper = (cartItems, productToAdd) => {
  console.log("INSIDE newCartItem");
  const exestingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  console.log("exestingCartItem", exestingCartItem);
  if (exestingCartItem) {
    return cartItems.map((existingCartList) =>
      existingCartList.id === productToAdd.id
        ? { ...existingCartList, quantity: existingCartList.quantity + 1 }
        : existingCartList
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decrementItemsFromCartHelper = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove?.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove?.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove?.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const incrementItemsFromCartHelper = (cartItems, productToAdd) => {
  return cartItems.map((existingCartList) =>
    existingCartList.id === productToAdd.id
      ? { ...existingCartList, quantity: existingCartList.quantity + 1 }
      : existingCartList
  );
};

export const addItemsToCart = (cartItems, productToAdd) => {
  const newCartItem = addItemsToCartHelper(cartItems, productToAdd);
  console.log("newCartItem", newCartItem);
  return { type: ActionTypes.SET_CART_ITEMS, payload: newCartItem };
};

export const decrementItemsFromCart = (cartItems, productToRemove) => {
  const newCartItem = decrementItemsFromCartHelper(cartItems, productToRemove);
  return { type: ActionTypes.REMOVE_SELECTED_CART_ITEMS, payload: newCartItem };
};

export const incrementItemsFromCart = (cartItems, productToAdd) => {
  const newCartItem = incrementItemsFromCartHelper(cartItems, productToAdd);
  return { type: ActionTypes.ADD_SELECTED_CART_ITEMS, payload: newCartItem };
};

export const clearItemsFromCart = () => {
  return { type: ActionTypes.CLEAR_CART_ITEMS, payload: {} };
};
