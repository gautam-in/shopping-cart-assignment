import {
    GET_BANNER_LIST_REQUEST,
    GET_BANNER_LIST_SUCCESS,
    GET_BANNER_LIST_FAILED,
  } from "../constants/constants";
  
  import { getBannerListAPI } from "../../services/services";
  
  export const getBannerList = () => {
    return (dispatch) => {
      dispatch({
        type: GET_BANNER_LIST_REQUEST,
      });
      getBannerListAPI()
        .then((data) => {
          dispatch({
            type: GET_BANNER_LIST_SUCCESS,
            payload: data,
          });
        })
        .catch((error) => {
          dispatch({
            type: GET_BANNER_LIST_FAILED,
            payload: error,
          });
        });
    };
  };
  