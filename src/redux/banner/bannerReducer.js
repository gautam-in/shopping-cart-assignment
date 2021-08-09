import {
    FETCH_BANNERS_REQUEST,
    FETCH_BANNERS_SUCCESS,
    FETCH_BANNERS_FAILURE,
  } from "./bannerTypes";
  
  const initialState = {
    loading: false,
    banners: [],
    error: "",
  };
  
  const bannersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BANNERS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_BANNERS_SUCCESS:
        return {
          loading: false,
          banners: action.payload,
          error: "",
        };
      case FETCH_BANNERS_FAILURE:
        return {
          loading: false,
          banners: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default bannersReducer;
  