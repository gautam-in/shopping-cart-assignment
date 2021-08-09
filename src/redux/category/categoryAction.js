import axios from "axios";
import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from "./categoryTypes";

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch(fetchCategoriesRequest());
    axios
      .get("http://localhost:5000/categories")
      .then((categories) => {
        const filteredlist = categories.data.filter((item) => item.imageUrl);
        dispatch(fetchCategoriesSuccess(filteredlist));
      })
      .catch((error) => {
        dispatch(fetchCategoriesFailure(error));
      });
  };
};

export const fetchCategoriesRequest = () => {
  return {
    type: FETCH_CATEGORIES_REQUEST,
  };
};

export const fetchCategoriesSuccess = (category) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: category,
  };
};

export const fetchCategoriesFailure = (error) => {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: error,
  };
};