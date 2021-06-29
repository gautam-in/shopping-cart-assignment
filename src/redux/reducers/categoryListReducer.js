import {
  GET_CATEGORY_LIST_FAILED,
  GET_CATEGORY_LIST_REQUEST,
  GET_CATEGORY_LIST_SUCCESS,
} from "../constants/constants";

const initialState = {
  categoryList: [],
  error: "",
  loading: true,
};

const categoryListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_LIST_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_CATEGORY_LIST_SUCCESS: {
      return {
        ...state,
        categoryList: action.payload,
        loading: false,
      };
    }
    case GET_CATEGORY_LIST_FAILED: {
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

export default categoryListReducer;
