import {
  SABKABAZAAR_CREATE_ADD_TO_CART_REQUEST,
  SABKABAZAAR_CREATE_ADD_TO_CART_SUCCESS,
  SABKABAZAAR_CREATE_ADD_TO_CART_FAILURE,
  SABKABAZAAR_MODIFY_PRODUCT_CART_QUANTITY,
  SABKABAZAAR_DELETE_PRODUCT_CART,
} from '../actions';

const intialState = {
  loading: false,
  data: {},
  error: false,
};

const products = (state = intialState, action) => {
  switch (action.type) {
    case SABKABAZAAR_CREATE_ADD_TO_CART_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case SABKABAZAAR_CREATE_ADD_TO_CART_SUCCESS: {
      return {
        loading: false,
        data: {...state.data, ...action.cartProduct.entities.data},
        error: false,
      };
    }
    case SABKABAZAAR_CREATE_ADD_TO_CART_FAILURE: {
      return {
        loading: false,
        data: {},
        error: true,
      };
    }
    case SABKABAZAAR_MODIFY_PRODUCT_CART_QUANTITY: {
      return {
        loading: false,
        data: {...state.data, ...action.product.entities.data},
        error: false,
      };
    }
    case SABKABAZAAR_DELETE_PRODUCT_CART: {
      const newData = {...state.data};
      delete newData[action.product.id];
      return {
        loading: false,
        data: newData,
        error: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default products;
