import {
  GET_PRODUCT_LIST_FAILED,
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_SUCCESS,
} from "../constants/constants";

const initialState = {
  error: "",
  loading: true,
  productList: [],
};

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_PRODUCT_LIST_SUCCESS: {
      return {
        ...state,
        productList: action.payload,
        loading: false,
      };
    }
    case GET_PRODUCT_LIST_FAILED: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default productListReducer;
