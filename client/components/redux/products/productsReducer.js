import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from "./productsTypes";

const initialState = {
  data: [],
  loading: true,
  error: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST: {
      return { ...initialState, loading: true };
    }

    case FETCH_PRODUCTS_SUCCESS: {
      return {
        ...initialState,
        loading: false,
        data: action.payload,
      };
    }

    case FETCH_PRODUCTS_ERROR: {
      return { ...initialState, loading: false, error: true };
    }

    default:
      return state;
  }
};

export default productsReducer;
