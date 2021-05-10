import {  GET_CATEGORIES,GET_BANNERS,GET_PRODUCTS,ADD_TO_CART,REMOVE_FROM_CART,SHOW_MODAL,HIDE_MODAL } from "../actions/action-types";
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

  export function addToCart(product){
    return { type: ADD_TO_CART, product }
  }

  export function removeFromCart(product){
    return { type: REMOVE_FROM_CART, product }
  }

  export function showModal(){
    console.log("action called");
    return { type: SHOW_MODAL }
  }

  export function hideModal(){
    return { type: HIDE_MODAL}
  }