import { ManageShopConstants }  from '../contants';

export const SABKABAZAAR_FETCH_PRODUCTS_REQUEST = `${ManageShopConstants.MODULE_PREFIX}_FETCH_PRODUCTS_REQUEST`;
export const SABKABAZAAR_FETCH_PRODUCTS_SUCCESS = `${ManageShopConstants.MODULE_PREFIX}_FETCH_PRODUCTS_SUCCESS`;
export const SABKABAZAAR_FETCH_PRODUCTS_FAILURE = `${ManageShopConstants.MODULE_PREFIX}_FETCH_PRODUCTS_FAILURE`;

export const fetchProductsDataRequestAction = () => ({
  type: SABKABAZAAR_FETCH_PRODUCTS_REQUEST,
});

export const fetchProductDataSuccessAction = (products) => ({
  type: SABKABAZAAR_FETCH_PRODUCTS_SUCCESS,
  products,
});

export const fetchProductsDataFailureAction = () => ({
  type: SABKABAZAAR_FETCH_PRODUCTS_FAILURE,
});
