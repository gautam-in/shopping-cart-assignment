import { FetchActionTypes } from "./fetch.types";

const INITIAL_STATE = {
  bannerData: [],
  categoriesData: [],
  productsData: [],
  error: false,
};
const fetchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FetchActionTypes.FETCH_BANNERS_START:
      return {
        ...state,
        error: false,
      };
    case FetchActionTypes.FETCH_BANNERS_SUCCESS:
      return {
        ...state,
        bannerData: action.payload,
      };
    case FetchActionTypes.FETCH_BANNERS_ERROR:
      return {
        ...state,
        error: true,
      };
    case FetchActionTypes.FETCH_CATEGORIES_START:
      return {
        ...state,
        error: false,
      };
    case FetchActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesData: action.payload,
      };
    case FetchActionTypes.FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        error: true,
      };
    case FetchActionTypes.FETCH_PRODUCTS_START:
      return {
        ...state,
        error: false,
      };
    case FetchActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        productsData: action.payload,
      };
    case FetchActionTypes.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default fetchReducer;
