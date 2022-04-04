import {
  PRODUCT_LIST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILURE,
} from "./products.action";

const initialState = {
  allProducts: [],
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_LIST:
      return { ...state };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case PRODUCT_LIST_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
