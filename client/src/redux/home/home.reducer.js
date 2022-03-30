import HomeActionTypes from "./home.types";

const INITIAL_STATE = {
  errorMessage: null,
  banners: [],
  categories: [],
  hidden: true,
};

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeActionTypes.FETCH_HOME_PAGE_BANNER_SUCCESS:
      return {
        ...state,
        banners: action.payload,
      };
    case HomeActionTypes.FETCH_HOME_PAGE_BANNER_FAILURE:
    case HomeActionTypes.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case HomeActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    case HomeActionTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default homeReducer;
