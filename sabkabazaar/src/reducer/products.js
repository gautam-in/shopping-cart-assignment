import {
  SABKABAZAAR_FETCH_PRODUCTS_REQUEST,
  SABKABAZAAR_FETCH_PRODUCTS_SUCCESS,
  SABKABAZAAR_FETCH_PRODUCTS_FAILURE,
} from '../actions';

const intialState = {
  loading: false,
  data: {},
  error: false,
};

const products = (state = intialState, action) => {
  switch (action.type) {
    case SABKABAZAAR_FETCH_PRODUCTS_REQUEST: {
      return {
        loading: true,
        data: {},
        error: false,
      };
    }
    case SABKABAZAAR_FETCH_PRODUCTS_SUCCESS: {
      return {
        loading: false,
        data: action.products.entities.data,
        error: false,
      };
    }
    case SABKABAZAAR_FETCH_PRODUCTS_FAILURE: {
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
