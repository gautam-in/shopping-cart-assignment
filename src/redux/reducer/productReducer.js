import { STORE_ALL_PRODUCTS } from "../constants";

const productReducer = (initialState = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case STORE_ALL_PRODUCTS:
      return [...payload];

    default:
      return initialState;
  }
};

export default productReducer;
