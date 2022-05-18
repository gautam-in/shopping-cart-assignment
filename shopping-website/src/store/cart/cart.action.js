import { createAction } from "../../utils/reducer/reducer.util";
import { CART_ACTION_TYPES } from "./cart.types";

export const setCartData = (cartData) =>
  createAction(CART_ACTION_TYPES.SET_CART_DATA, cartData);

export const setCartToggle = () =>
  createAction(CART_ACTION_TYPES.SET_CART_TOGGLE);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_DATA, newCartItems)
};

export const removeItemToCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_DATA, newCartItems)
};


const addCartItem = (cartItems, productToAdd) => {
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
  
    return [...cartItems, {...productToAdd, quantity:1}]
  }
  
  const removeCartItem = (cartItems, cartItemToRemove) => {
      const existingCartItem = cartItems.find(
          (cartItem) => cartItem.id === cartItemToRemove.id
        );
      
        if (existingCartItem.quantity === 1) {
          return cartItems.filter((cartItem) =>
            cartItem.id !== cartItemToRemove.id
          );
        }
      
        return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
      );
  }
