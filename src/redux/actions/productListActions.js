import {
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAILED,
} from "../constants/constants";

import { getProductListAPI } from "../../services/services";

export const getProductList = () => {
  return (dispatch) => {
    dispatch({
      type: GET_PRODUCT_LIST_REQUEST,
    });
    getProductListAPI()
      .then((data) => {
        dispatch({
          type: GET_PRODUCT_LIST_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_PRODUCT_LIST_FAILED,
          payload: error,
        });
      });
  };
};
