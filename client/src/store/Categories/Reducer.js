import {
    GET_CATEGORIES_DATA,
    SET_CATEGORY_ID
  } from './Types';
  
  export default (state, action) => {
    switch (action.type) {
      case GET_CATEGORIES_DATA:
        return {
          ...state,
          categories: action.payload,
        };
      case SET_CATEGORY_ID:
        return {
          ...state,
          categoryId: action.payload
        };
      default:
        return state;
    }
  };