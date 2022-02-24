import ProductsActionTypes from "./products.types";

const INITIAL_STATE={
    productsData : [],
    loading : false,
    errorMessage: null
};

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ProductsActionTypes.Fetch_PRODUCTS_LIST:
        return {
          ...state,
          loading: true,
        };
      case ProductsActionTypes.Fetch_PRODUCTS_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          productsData: action.payload,
        };
      case ProductsActionTypes.Fetch_PRODUCTS_LIST_FAILURE:
        return {
          ...state,
          loading: false,
          errorMessage: action.payload
        };
      default:
        return state;
    }
  };

export default productReducer;