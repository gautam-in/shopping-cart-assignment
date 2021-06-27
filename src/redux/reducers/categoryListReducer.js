import {
  GET_CATEGORY_LIST_REQUEST,
  GET_CATEGORY_LIST_SUCCESS,
  GET_CATEGORY_LIST_FAILED,
} from "../constants/constants";

const initialState = {
  categoryList: [],
  loading: true,
  error: "",
};

const categoryListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_LIST_REQUEST: {
      return {
        ...initialState,
        loading: true,
      };
    }
    case GET_CATEGORY_LIST_SUCCESS: {
      return {
        ...initialState,
        categoryList: action.payload,
        loading: false,
      };
    }
    case GET_CATEGORY_LIST_FAILED: {
      return {
        ...initialState,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default categoryListReducer;
