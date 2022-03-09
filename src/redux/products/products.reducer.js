import { ProductsActionType } from "./products.types";

const INITIAL_STATE = {
  selectedCategory: null,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductsActionType.SET_PRODUCTS_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
