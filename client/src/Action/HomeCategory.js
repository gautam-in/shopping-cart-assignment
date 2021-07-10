import {
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
  CATEGORIES_URL,
} from "./ActionType.js";

export const getCategoryRequest = () => {
  return {
    type: GET_CATEGORY_REQUEST,
  };
};

export const getCategorySuccess = (Category) => {
  return {
    type: GET_CATEGORY_SUCCESS,
    payload: Category,
  };
};

export const getCategoryFailure = (error) => {
  return {
    type: GET_CATEGORY_FAILURE,
    payload: error,
  };
};

export const getCategory = () => {
  return (dispatch) => {
    dispatch(getCategoryRequest());
    fetch(CATEGORIES_URL)
      .then((res) => res.json())
      .then((data) => {
        dispatch(getCategorySuccess(data));
      })
      .catch((err) => {
        dispatch(getCategoryFailure(err));
      });
  };
};
