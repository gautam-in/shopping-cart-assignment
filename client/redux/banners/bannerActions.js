import {
  FETCH_BANNERS_REQUEST,
  FETCH_BANNERS_SUCCESS,
  FETCH_BANNERS_FAILURE,
} from "./bannerActionTypes";
import { BANNERS_URL } from "../../constants";

export const fetchBannersRequest = () => {
  return {
    type: FETCH_BANNERS_REQUEST,
  };
};

export const fetchBannersSuccess = (banners) => {
  return {
    type: FETCH_BANNERS_SUCCESS,
    payload: banners,
  };
};

export const fetchBannersFailure = (error) => {
  return {
    type: FETCH_BANNERS_FAILURE,
    payload: error,
  };
};

export const fetchBanners = () => {
  return (dispatch) => {
    dispatch(fetchBannersRequest());
    fetch(BANNERS_URL)
      .then((res_) => res_.json())
      .then((data) => {
        dispatch(fetchBannersSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchBannersFailure(err));
      });
  };
};
