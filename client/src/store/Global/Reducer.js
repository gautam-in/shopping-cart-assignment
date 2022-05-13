import {
    INITIALIZE_LOADING
  } from './Types';
  
  export default (state, action) => {
    switch (action.type) {
      case INITIALIZE_LOADING:
        return {
          ...state,
          loading: action.payload,
        };
      default:
        return state;
    }
  };