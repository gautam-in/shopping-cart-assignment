import { GET_BANNER_ERROR, GET_BANNER_LOADING, GET_BANNER_SUCCESS } from './actionTypes';

const getBannerLoading = () => {
  return {
    type: GET_BANNER_LOADING,
  };
};

const getBannerSuccess = (data) => {
  return {
    type: GET_BANNER_SUCCESS,
    payload: data,
  };
};

const getBannerError = (error) => {
  return {
    type: GET_BANNER_ERROR,
    payload: error,
  };
};

export const getBannerAction = {
  getBannerLoading,
  getBannerSuccess,
  getBannerError,
};
