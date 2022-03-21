import { FetchActionTypes } from "./fetch.types";
import axios from "axios";

export const fetchBanners = () => async (dispatch) => {
  try {
    dispatch({
      type: FetchActionTypes.FETCH_BANNERS_START,
    });
    const response = await axios.get("http://localhost:3030/banners");
    dispatch({
      type: FetchActionTypes.FETCH_BANNERS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    console.error("Failed to fetch");
    console.error(e);
    dispatch({
      type: FetchActionTypes.FETCH_BANNERS_ERROR,
    });
  }
};
export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch({
      type: FetchActionTypes.FETCH_CATEGORIES_START,
    });
    const response = await axios.get("http://localhost:3030/categories");
    dispatch({
      type: FetchActionTypes.FETCH_CATEGORIES_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    console.error("Failed to fetch");
    console.error(e);
    dispatch({
      type: FetchActionTypes.FETCH_CATEGORIES_ERROR,
    });
  }
};

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: FetchActionTypes.FETCH_PRODUCTS_START,
    });
    const response = await axios.get("http://localhost:3030/products");
    dispatch({
      type: FetchActionTypes.FETCH_PRODUCTS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    console.error("Failed to fetch");
    console.error(e);
    dispatch({
      type: FetchActionTypes.FETCH_PRODUCTS_ERROR,
    });
  }
};