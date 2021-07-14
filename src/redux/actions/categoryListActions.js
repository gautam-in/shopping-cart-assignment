import {
  GET_CATEGORY_LIST_REQUEST,
  GET_CATEGORY_LIST_SUCCESS,
  GET_CATEGORY_LIST_FAILED,
} from "../constants/constants";

import { getCategoryListAPI } from "../../services/services";

export const getCategoryList = () => {
  return (dispatch) => {
    dispatch({
      type: GET_CATEGORY_LIST_REQUEST,
    });
    getCategoryListAPI()
      .then((data) => {
        dispatch({
          type: GET_CATEGORY_LIST_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_CATEGORY_LIST_FAILED,
          payload: error,
        });
      });
  };
};
