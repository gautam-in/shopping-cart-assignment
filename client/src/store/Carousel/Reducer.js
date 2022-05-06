import {
    GET_CAROUSEL_DATA,
  } from './Types';
  
  export default (state, action) => {
    switch (action.type) {
      case GET_CAROUSEL_DATA:
        return {
          ...state,
          ...action.payload,
          carousel: action.payload,
        };
      default:
        return state;
    }
  };