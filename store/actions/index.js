import { apiProvider } from '../../utils/api';
import {
  ADDTOCART,
  ADD_TO_SHIPPING,
  BANNERS,
  CATEGORIES,
  DELETE_FROM_SHIPPING,
  FETCH_BANNERS,
  FETCH_CATEGORIES,
  FETCH_PRODUCTS,
  PRODUCTS,
  RESET_STORE,
  SET_CART_OPEN,
  SIGN_IN,
  SIGN_OUT,
} from '../../utils/constants';

export const fetchBanners = () => async (dispatch) => {
  const data = await apiProvider.GET(BANNERS);
  dispatch({ type: FETCH_BANNERS, payload: data });
};

export const fetchCategories = () => async (dispatch) => {
  const data = await apiProvider.GET(CATEGORIES);
  dispatch({ type: FETCH_CATEGORIES, payload: data });
};

export const fetchProducts = (category) => async (dispatch) => {
  const data = await apiProvider.GET(PRODUCTS);
  let productsArr = data;
  if (category) {
    productsArr = data.filter((product) => product.category === category);
  }
  dispatch({ type: FETCH_PRODUCTS, payload: productsArr });
};

export const setCartOpen =
  (cartOpen = false) =>
  (dispatch) => {
    dispatch({ type: SET_CART_OPEN, payload: cartOpen });
  };

export const addToShipping = (product) => async (dispatch) => {
  const data =await apiProvider.POST(ADDTOCART,product.id);
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
  localStorage.clear()
  return { type: SIGN_OUT };
};

export const resetStore = () => {
  return {
    type: RESET_STORE,
  };
};
