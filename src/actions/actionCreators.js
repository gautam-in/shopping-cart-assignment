import {  GET_CATEGORIES,GET_BANNERS,GET_PRODUCTS } from "../actions/action-types";
import {  GET_CATEGORIES_API,GET_BANNERS_API,GET_PRODUCTS_API  } from "../apis";
import {getData} from '../getService';

export function getCategories() {
    return function(dispatch) {
      return getData(GET_CATEGORIES_API).then(json => dispatch({
        type: GET_CATEGORIES,
        payload:json.data
    }));
    };
  }

  export function getProducts() {
    return function(dispatch) {
      return getData(GET_PRODUCTS_API ).then(json => dispatch({ type: GET_PRODUCTS, payload: json.data }));
    };
  }

  export function getBanners() {
    return function(dispatch) {
      return getData(GET_BANNERS_API).then(json => {
          dispatch({ type: GET_BANNERS, payload: json });
        });
    };
  }