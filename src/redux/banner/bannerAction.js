import axios from "axios";
import {
  FETCH_BANNERS_REQUEST,
  FETCH_BANNERS_SUCCESS,
  FETCH_BANNERS_FAILURE,
} from "./bannerTypes"

export const fetchBanners = () => {
  return (dispatch) => {
    dispatch(fetchBannersRequest());
    axios
      .get("http://localhost:5000/banners")
      .then((banners) => {
        dispatch(fetchBannersSuccess(banners.data));
      })
      .catch((error) => {
        dispatch(fetchBannersFailure(error));
      });
  };
};

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