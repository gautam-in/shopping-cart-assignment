import {
  FETCH_BANNERS,
  FETCH_CATEGORIES,
  FETCH_PRODUCTS,
  SET_CATEGORY,
} from "../actions/Constant";

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BANNERS:
      return { ...state, banners: action.payload };
    case FETCH_CATEGORIES:
      return { ...state, categories: action.payload };
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_CATEGORY:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};


export default productsReducer;
