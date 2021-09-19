import {
  GET_BANNER_REQUEST,
  GET_BANNER_SUCCESS,
  GET_BANNER_FAILURE,
  BANNERS_URL,
} from "./ActionType.js";

export const getBannerRequest = () => {
  return {
    type: GET_BANNER_REQUEST,
  };
};

export const getBannerSuccess = (Banner) => {
  return {
    type: GET_BANNER_SUCCESS,
    payload: Banner,
  };
};

export const getBannerFailure = (error) => {
  return {
    type: GET_BANNER_FAILURE,
    payload: error,
  };
};

export const getBanner = () => {
  return (dispatch) => {
    dispatch(getBannerRequest());
    fetch(BANNERS_URL)
      .then((res) => res.json())
      .then((data) => {
        dispatch(getBannerSuccess(data));
      })
      .catch((err) => {
        dispatch(getBannerFailure(err));
      });
  };
};
