import {
  PRODUCT_DATA,
  PRODUCT_DATA_LOADING,
  PRODUCT_DATA_ERROR,
} from "./productTypes";

export const getProductDataLoading = () => {
  return {
    type: PRODUCT_DATA_LOADING,
  };
};

export const getProductData = (categories) => {
  return {
    type: PRODUCT_DATA,
    payload: categories,
  };
};

export const getProductDataError = (err) => {
  return {
    type: PRODUCT_DATA_ERROR,
    payload: err,
  };
};

export const fetchProductData = (url) => {
  return (dispatch) => {
    dispatch(getProductDataLoading());
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch(getProductData(data));
      })
      .catch((err) => {
        dispatch(getProductDataError(err));
      });
  };
};
