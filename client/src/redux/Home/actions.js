import { HomeActionTypes } from './types';

// CATEGORIES

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

// BANNERS

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

// Notification

export const triggerNotification = error => {
  return {
    type: HomeActionTypes.TRIGGER_NOTIFICATION,
    payload: error
  }
};

export const closeNotification = () => {
  return {
    type: HomeActionTypes.CLOSE_NOTIFICATION
  }
};
