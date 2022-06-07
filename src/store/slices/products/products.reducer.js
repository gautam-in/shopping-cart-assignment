import { PRODUCT_ACTIONS } from "./products.types";

export const INITIAL_STATE = {
  products: [],
  error: null,
  isLoading: false,
};

export const productReducer = (state = { INITIAL_STATE }, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_ACTIONS.FETCH_PRODUCT_START:
      return { ...state, isLoading: true };

    case PRODUCT_ACTIONS.FETCH_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, products: payload };

    case PRODUCT_ACTIONS.FETCH_PRODUCT_FAILED:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
