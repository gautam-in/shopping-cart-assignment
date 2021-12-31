import { ProductsActionTypes } from './types';

const INITIAL_STATE = {
  products: []
};

const productsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch(type) {
    case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: [...payload]
      }
    default:
      return state;
  }
};

export default productsReducer;