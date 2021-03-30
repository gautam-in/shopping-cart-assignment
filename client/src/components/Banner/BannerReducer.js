import BannerActionTypes from "./BannerTypes";

const INITIAL_STATE = {
  loading: false,
  banners: [],
  error: null,
};

const BannerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BannerActionTypes.GET_BANNERS_START:
      return {
        ...state,
        loading: true,
      };
    case BannerActionTypes.GET_BANNERS_SUCCESS:
      console.log(action.payload);
      const payload = action.payload
        .filter((item) => item.enabled)
        .sort((a, b) => a.order - b.order);
      return {
        ...state,
        banners: payload,
        error: null,
        loading: false,
      };

    case BannerActionTypes.GET_BANNERS_FAILURE:
      const respError =
        action.payload &&
        action.payload.response &&
        action.payload.response.data;

      return {
        ...state,
        loading: false,
        error: respError,
      };

    default:
      return {
        ...state,
      };
  }
};

export default BannerReducer;
