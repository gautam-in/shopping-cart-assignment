import {
  ADD_TO_SHIPPING,
  DELETE_FROM_SHIPPING,
  FETCH_BANNERS,
  FETCH_CATEGORIES,
  FETCH_PRODUCTS,
  SET_CART_OPEN,
  SET_CATEGORY
} from "./Constant";
import {GET, POST} from '../../Utils/helper'

export const fetchBanners = () => async (dispatch) => {
  const data = await GET("banners")
  dispatch({ type: FETCH_BANNERS, payload: data });
};

export const fetchCategories = () => async (dispatch) => {
  const data = await GET("categories")
  dispatch({ type: FETCH_CATEGORIES, payload: data });
};

export const fetchProducts = (category) => async (dispatch) => {
  const data = await GET("products")
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



export const addToShipping = (product) => async (dispatch) => {
  const data = await POST('addToCart',product.id)
  if (data) {
    dispatch({ type: ADD_TO_SHIPPING, payload: product });
  }
};

export const deleteFromShipping = (product) => async (dispatch) => {
  dispatch({ type: DELETE_FROM_SHIPPING, payload: product });
};
