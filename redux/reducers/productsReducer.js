import {
  FETCH_BANNERS,
  FETCH_CATEGORIES,
  FETCH_PRODUCTS,
  SET_CATEGORY,
  RESET_STORE,
  SIGN_IN,
  SIGN_OUT,
} from "../actions/Constant";
import _ from "lodash";

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
      localStorage.setItem("user", action.payload.email);
      return { ...state, userId: action.payload.email };
    case SIGN_OUT:
      localStorage.clear();
      return { ...state, userId: null };
    case FETCH_BANNERS:
      return { ...state, banners: action.payload };
    case FETCH_CATEGORIES:
      return { ...state, categories: action.payload };
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_CATEGORY:
      return { ...state, selected: action.payload };
   
    case RESET_STORE: {
      state = {};
      return state;
    }
    default:
      return state;
  }
};


export default productsReducer;
