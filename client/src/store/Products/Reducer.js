import {
    GET_PRODUCTS_DATA,
  } from './Types';
  
  export default (state, action) => {
    switch (action.type) {
      case GET_PRODUCTS_DATA:
        return {
          ...state,
          ...action.payload,
          products: action.payload,
        };
      default:
        return state;
    }
  };