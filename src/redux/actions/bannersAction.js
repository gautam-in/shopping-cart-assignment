import { FETCH_BANNERS_REQUEST, FETCH_BANNERS_SUCCESS, FETCH_BANNERS_FAILURE } from '../types';

export const fetchBannersDataRequest = () => ({
  type: FETCH_BANNERS_REQUEST
});

export const fetchBannersDataSuccess = (banners) => ({
  type: FETCH_BANNERS_SUCCESS,
  banners
});

export const fetchBannersDataFailure = () => ({
  type: FETCH_BANNERS_FAILURE
});
