import { PRODUCTS_ACTION_TYPES } from './products.types';
import { createAction } from '../../utils/reducer/reducer.utils';

import { get } from '../../utils/apis';

export const fetchCategoriesStart = () =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, categoriesArray);

export const fetchCategoriesFailure = (error) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED, error);

export const fetchProductsStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
      const { data } = await get('products');
      dispatch(fetchCategoriesSuccess(data));
    } catch (error) {
      dispatch(fetchCategoriesFailure(error));
    }
  };
};
