import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from '../types';

const intialState = {
  loading: false,
  data: {},
  error: false,
};

const products = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST: {
      return {
        loading: true,
        data: {},
        error: false,
      };
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return {
        loading: false,
        data: action.products.entities.data,
        error: false,
      };
    }
    case FETCH_PRODUCTS_FAILURE: {
      return {
        loading: false,
        data: {},
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default products;
