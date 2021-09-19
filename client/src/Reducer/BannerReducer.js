import {
  GET_BANNER_REQUEST,
  GET_BANNER_SUCCESS,
  GET_BANNER_FAILURE,
} from "../Action/ActionType.js";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

const bannerReducer = (state, action) => {
  if (typeof state === "undefined") {
    return initialState;
  }
  switch (action.type) {
    case GET_BANNER_REQUEST:
      return {
        ...state,
        loading: true,
        data: [],
        error: "",
      };
    case GET_BANNER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case GET_BANNER_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bannerReducer;
