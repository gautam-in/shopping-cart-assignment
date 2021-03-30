import BannerActionTypes from "./BannerTypes";

// get Banners
export const getBannersStart = () => ({
  type: BannerActionTypes.GET_BANNERS_START,
});

export const getBannersSuccess = (data) => ({
  type: BannerActionTypes.GET_BANNERS_SUCCESS,
  payload: data,
});

export const getBannersFailure = (error) => ({
  type: BannerActionTypes.GET_BANNERS_FAILURE,
  payload: error,
});
