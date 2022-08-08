import { createContext, useReducer } from "react";
import { INITIAL_STATE, shopReducer } from "../reducers/shopReducer";
import { updateCartItemsAction, shopActions } from "../actions/shopActions";
const initialState = {
  showCart: false,
  setShowCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  itemCount: 0,
  removeItemFromCart: () => {},
  shopCategories: [],
  setShopCategories: () => {},
};
export const addCartItem = (cartItem, productsToAdd) => {
  const isItemExists = cartItem.find((item) => item.id === productsToAdd.id);
  if (isItemExists) {
    return cartItem.map((cartItm) =>
      cartItm.id === productsToAdd.id
        ? { ...cartItm, quantity: cartItm.quantity + 1 }
        : cartItm
    );
  }
  //return new array with modified/new cart item
  return [...cartItem, { ...productsToAdd, quantity: 1 }];
};
export const removeCartItem = (cartItem, cartItemToRemove) => {
  const isItemExists = cartItem.find((item) => item.id === cartItemToRemove.id);
  if (isItemExists.quantity === 1) {
    return cartItem.filter((item) => item.id !== cartItemToRemove.id);
  }
  return cartItem.map((cartItm) =>
    cartItm.id === cartItemToRemove.id
      ? { ...cartItm, quantity: cartItm.quantity - 1 }
      : cartItm
  );
};
export const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [{ showCart, cartItems, itemCount, shopCategories }, dispatch] =
    useReducer(shopReducer, INITIAL_STATE);
  const addItemToCart = (productsToAdd) => {
    const newCartItems = addCartItem(cartItems, productsToAdd);
    updateCartItemsAction(newCartItems, dispatch);
  };
  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsAction(newCartItems, dispatch);
  };
  const setShowCart = (bool) => {
    dispatch({ type: shopActions.SHOW_MINICART, payload: bool });
  };
  const setShopCategories = (categories) => {
    dispatch({ type: shopActions.SET_CATEGORIES, payload: categories });
  };
  const value = {
    showCart,
    setShowCart,
    cartItems,
    addItemToCart,
    itemCount,
    removeItemFromCart,
    shopCategories,
    setShopCategories,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
