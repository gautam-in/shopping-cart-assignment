import { PRODUCTS_ACTION_TYPES } from './products.types';
import { createAction } from '../../utils/reducer/reducer.utils';

import ApiRequestService from './../../services/api.service';

export const fetchCategoriesStart = () =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, categoriesArray);

export const fetchCategoriesFailure = (error) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED, error);

export const fetchProductsStartAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const { data } = await ApiRequestService.getApi('products');
    dispatch(fetchCategoriesSuccess(data));
  } catch (error) {
    dispatch(fetchCategoriesFailure(error));
  }
};
