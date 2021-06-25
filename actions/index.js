import { actionTypes } from "redux-form";
import {
  ADD_TO_SHIPPING,
  CREATE_CART_ITEM,
  DELETE_FROM_SHIPPING,
  FETCH_BANNERS,
  FETCH_CATEGORIES,
  FETCH_PRODUCTS,
  RESET_STORE,
  SET_CART_OPEN,
  SET_CATEGORY,
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
} from "./types";

export const fetchBanners = () => async (dispatch) => {
  const response = await fetch("http://localhost:5000/banners");
  const data = await response.json();
  dispatch({ type: FETCH_BANNERS, payload: data });
};

export const fetchCategories = () => async (dispatch) => {
  const response = await fetch("http://localhost:5000/categories");
  const data = await response.json();
  dispatch({ type: FETCH_CATEGORIES, payload: data });
};

export const fetchProducts = (category) => async (dispatch) => {
  const response = await fetch("http://localhost:5000/products");
  const data = await response.json();
  let productsArr = data;
  if (category) {
    productsArr = data.filter((product) => product.category === category);
  }
  dispatch({ type: FETCH_PRODUCTS, payload: productsArr });
};

export const setCategory = (id) => async (dispatch, getState) => {
  let category;
  if (id) {
    category = getState().categories.categories?.filter(
      (ele) => ele.id === id
    )[0];
  }
  dispatch({ type: SET_CATEGORY, payload: category });
};

export const setCartOpen =
  (cartOpen = false) =>
  (dispatch) => {
    dispatch({ type: SET_CART_OPEN, payload: cartOpen });
  };

//export const fetchCartItems =

export const addToShipping = (product) => async (dispatch) => {
  const response = await fetch("http://localhost:5000/addToCart", {
    method: "post",
    body: product.id,
  });
  const data = await response.json();
  if (data) {
    dispatch({ type: ADD_TO_SHIPPING, payload: product });
  }
};

export const deleteFromShipping = (product) => async (dispatch) => {
  dispatch({ type: DELETE_FROM_SHIPPING, payload: product });
};

export const signIn = (formData) => {
  return { type: SIGN_IN, payload: formData };
};
export const signOut = () => {
  return { type: SIGN_OUT };
};

export const resetStore = () => {
  return {
    type: RESET_STORE,
  };
};
