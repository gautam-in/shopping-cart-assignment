import ProductsActionTypes from "./products.types";

const INITIAL_STATE = {
  errorMessage: null,
  products: [],
  activeCategory: null,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case ProductsActionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
