import { ManageShopConstants } from '../contants';

export const SABKABAZAAR_FETCH_CATEGORIES_REQUEST = `${ManageShopConstants.MODULE_PREFIX}_FETCH_CATEGORIES_REQUEST`;
export const SABKABAZAAR_FETCH_CATEGORIES_SUCCESS = `${ManageShopConstants.MODULE_PREFIX}_FETCH_CATEGORIES_SUCCESS`;
export const SABKABAZAAR_FETCH_CATEGORIES_FAILURE = `${ManageShopConstants.MODULE_PREFIX}_FETCH_CATEGORIES_FAILURE`;


export const fetchCategoriesDataRequestAction = () => ({
  type: SABKABAZAAR_FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesDataSuccessAction = (categories) => ({
  type: SABKABAZAAR_FETCH_CATEGORIES_SUCCESS,
  categories,
});

export const fetchCategoriesDataFailureAction = () => ({
  type: SABKABAZAAR_FETCH_CATEGORIES_FAILURE,
});
