import { CATEGORIES_ACTION_TYPES } from './categories.types';
import { createAction } from '../../utils/reducer/reducer.utils';

import { get } from '../../utils/apis';

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const setCurrentCategory = (categoryId) => {
  return createAction(CATEGORIES_ACTION_TYPES.SET_CURRENT_CATEGORY, categoryId);
};

export const fetchCategoriesFailure = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
      const { data } = await get('categories');
      dispatch(fetchCategoriesSuccess(data));
    } catch (error) {
      dispatch(fetchCategoriesFailure(error));
    }
  };
};
