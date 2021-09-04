import { GET_PRODUCTS } from "../actions/types";

const productState = {
  productList: [],
};

export const productReducer = (state = productState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, productList: action.payload };
    default:
      return state;
  }
};
