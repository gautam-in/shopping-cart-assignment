import {
    GET_PRODUCTS_DATA,
    SET_FILTER_PRODUCTS_DATA
  } from './Types';
  
  export default (state, action) => {
    switch (action.type) {
      case GET_PRODUCTS_DATA:
        return {
          ...state,
          products: action.payload,
        };
      case SET_FILTER_PRODUCTS_DATA:
        return {
          ...state,
          filterProducts: action.payload,
        };
      default:
        return state;
    }
  };