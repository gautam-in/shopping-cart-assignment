import {
    GET_BANNER_LIST_REQUEST,
    GET_BANNER_LIST_SUCCESS,
    GET_BANNER_LIST_FAILED,
  } from "../constants/constants";
  
  const initialState = {
    bannerList: [],
    loading: true,
    error: "",
  };
  
  const bannerListReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_BANNER_LIST_REQUEST: {
        return {
          ...initialState,
          loading: true,
        };
      }
      case GET_BANNER_LIST_SUCCESS: {
        return {
          ...initialState,
          bannerList: action.payload,
          loading: false,
        };
      }
      case GET_BANNER_LIST_FAILED: {
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
  
  export default bannerListReducer;
  