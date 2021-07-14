import {
  GET_BANNER_LIST_FAILED,
  GET_BANNER_LIST_REQUEST,
  GET_BANNER_LIST_SUCCESS,
} from "../constants/constants";

const initialState = {
  bannerList: [],
  error: "",
  loading: true,
};

const bannerListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BANNER_LIST_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_BANNER_LIST_SUCCESS: {
      return {
        ...state,
        bannerList: action.payload,
        loading: false,
      };
    }
    case GET_BANNER_LIST_FAILED: {
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

export default bannerListReducer;
