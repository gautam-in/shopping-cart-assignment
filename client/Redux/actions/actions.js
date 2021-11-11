import {
  GET_PRODUCTS,
  TOGGLE_CART,
  GET_CATEGORIES,
  GET_BANNERS,
  ADD_TO_CART,
  DELETE_CART_ITEM,
  LOGIN,
  CLEAR_CART,
  SET_ERROR,
} from "./types";

// Cart actions
export const toggleCart = () => {
  return {
    type: TOGGLE_CART,
  };
};

export const addCartItem = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const deleteCartQuantity = (payload) => {
  return {
    type: DELETE_CART_ITEM,
    payload,
  };
};

export const clearCart = () => {
  return { type: CLEAR_CART };
};

// Product actions
export const getProducts = (payload) => {
  return {
    type: GET_PRODUCTS,
    payload,
  };
};

//Category actions
export const getCategories = (payload) => {
  return {
    type: GET_CATEGORIES,
    payload,
  };
};

//banner actions
export const getBanners = (payload) => {
  return {
    type: GET_BANNERS,
    payload,
  };
};

//user

export const userLogin = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};

//ERROR
export const setError = (payload) => {
  return {
    type: SET_ERROR,
    payload
  }
}
