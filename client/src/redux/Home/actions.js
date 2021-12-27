import { HomeActionTypes } from './types';

export const fetchCategories = () => {
  return {
    type: HomeActionTypes.FETCH_CATEGORIES_START
  }
};

export const fetchCategoriesSuccess = categories => {
  return {
    type: HomeActionTypes.FETCH_CATEGORIES_SUCCESS,
    payload: categories
  }
};

export const fetchBanners = () => {
  return {
    type: HomeActionTypes.FETCH_BANNERS_START
  }
};

export const fetchBannersSuccess = banners => {
  return {
    type: HomeActionTypes.FETCH_BANNERS_SUCCESS,
    payload: banners
  }
};