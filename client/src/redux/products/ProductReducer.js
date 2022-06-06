import { UPDATE_PRODUCTS } from "./ProductActionTypes";

const products = {
  data: [],
};

const productReducer = (state = products, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
