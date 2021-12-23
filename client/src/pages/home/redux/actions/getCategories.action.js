import { GET_CATEGORIES_ERROR, GET_CATEGORIES_LOADING, GET_CATEGORIES_SUCCESS } from './actionTypes';

const getCategoriesLoading = () => {
  return {
    type: GET_CATEGORIES_LOADING,
  };
};

const getCategoriesSuccess = (data) => {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payload: data,
  };
};

const getCategoriesError = (error) => {
  return {
    type: GET_CATEGORIES_ERROR,
    payload: error,
  };
};

export const getCategoriesAction = {
  getCategoriesLoading,
  getCategoriesSuccess,
  getCategoriesError,
};
