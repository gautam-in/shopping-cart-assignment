import {
  CLEAR_CAROUSEL_DATA,
    GET_CAROUSEL_DATA,
  } from './Types';
  
  export default (state, action) => {
    switch (action.type) {
      case GET_CAROUSEL_DATA:
        return {
          ...state,
          carousel: action.payload,
        };
      case CLEAR_CAROUSEL_DATA:
        return {
          ...state,
          carousel: []
        }
      default:
        return state;
    }
  };