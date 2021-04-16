import {
  CREATE_ADD_TO_CART_REQUEST,
  CREATE_ADD_TO_CART_SUCCESS,
  CREATE_ADD_TO_CART_FAILURE,
  MODIFY_PRODUCT_CART_QUANTITY,
  DELETE_PRODUCT_CART,
} from '../types';

const intialState = {
  loading: false,
  data: {},
  error: false,
};

const products = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_ADD_TO_CART_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case CREATE_ADD_TO_CART_SUCCESS: {
      return {
        loading: false,
        data: {...state.data, ...action.cartProduct.entities.data},
        error: false,
      };
    }
    case CREATE_ADD_TO_CART_FAILURE: {
      return {
        loading: false,
        data: {},
        error: true,
      };
    }
    case MODIFY_PRODUCT_CART_QUANTITY: {
      return {
        loading: false,
        data: {...state.data, ...action.product.entities.data},
        error: false,
      };
    }
    case DELETE_PRODUCT_CART: {
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
