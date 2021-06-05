import { GET_PRODUCTS } from '../actions/action-types';
const initialState = {
  productsList: []
};

export const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        productsList: action.payload
      };
    default:
      return state;
  }
};
