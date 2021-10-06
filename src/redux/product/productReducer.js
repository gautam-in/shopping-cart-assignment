import {
  PRODUCT_DATA,
  PRODUCT_DATA_LOADING,
  PRODUCT_DATA_ERROR,
} from "./productTypes";

const intialState = {
  data: [],
  loading: true,
  error: "",
};

const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case PRODUCT_DATA:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case PRODUCT_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_DATA_ERROR:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
