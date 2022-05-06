import {
    GET_CATEGORIES_DATA,
    SET_CATEGORY_ID
  } from './Types';
  
  export default (state, action) => {
    switch (action.type) {
      case GET_CATEGORIES_DATA:
        return {
          ...state,
          ...action.payload,
          categories: action.payload,
          categoryId: action.payload[0].id
        };
      case SET_CATEGORY_ID:
        return {
          ...state,
          ...action.payload,
          categoryId: action.payload
        };
      default:
        return state;
    }
  };