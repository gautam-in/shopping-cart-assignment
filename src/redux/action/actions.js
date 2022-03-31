import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  STORE_ALL_PRODUCTS,
  STORE_ALL_CATEGORIES,
  STORE_ALL_BANNER,
} from "../constants";

export const addToCart = (payload) => ({ type: ADD_PRODUCT_TO_CART, payload });
export const removeFromCart = (payload) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload,
});

export const storeProducts = (payload) => ({
  type: STORE_ALL_PRODUCTS,
  payload,
});

export const storeCategories = (payload) => ({
  type: STORE_ALL_CATEGORIES,
  payload,
});

export const storeBanner = (payload) => ({
  type: STORE_ALL_BANNER,
  payload,
});
