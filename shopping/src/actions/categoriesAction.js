import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from '../types';

export const fetchCategoriesDataRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesDataSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories,
});

export const fetchCategoriesDataFailure = () => ({
  type: FETCH_CATEGORIES_FAILURE,
});
