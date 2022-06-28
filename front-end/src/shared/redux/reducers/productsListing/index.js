import { PRODUCTS_ACTION_TYPES } from '../../actionTypes/productListing';

export const PRODUCTS_STATE = {
  products: [],
};

export const productsReducer = (
  state = PRODUCTS_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};