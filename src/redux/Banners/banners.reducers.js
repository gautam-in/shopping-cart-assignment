import BannersActionTypes from "./banners.types";

const INITIAL_STATE={
    bannerData : [],
    loading : false,
    errorMessage: null
};

const bannerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case BannersActionTypes.FETCH_BANNERS_START:
        return {
          ...state,
          loading: true,
        };
      case BannersActionTypes.FETCH_BANNERS_SUCCESS:
        return {
          ...state,
          loading: false,
          bannerData: action.payload,
        };
      case BannersActionTypes.FETCH_BANNERS_FAILURE:
        return {
          ...state,
          loading: false,
          errorMessage: action.payload
        };
      default:
        return state;
    }
  };

export default bannerReducer;