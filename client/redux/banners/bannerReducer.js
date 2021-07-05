import {
  FETCH_BANNERS_REQUEST,
  FETCH_BANNERS_SUCCESS,
  FETCH_BANNERS_FAILURE,
} from "./bannerActionTypes";

const intialState = {
  loading: true,
  data: [],
  error: "",
};

const bannerReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_BANNERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BANNERS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_BANNERS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bannerReducer;
