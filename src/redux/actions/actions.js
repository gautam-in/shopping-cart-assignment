import axios from "axios";
import {
  AJAX_METHOD_POST,
  AJAX_METHOD_GET,
  GET_CATEGORIES,
  GET_BANNERS,
  GET_PRODUCTS,
  POSTS,
} from "../../constants/constants";

export const handleModalToggle = () => ({
  type: "MODAL_TOGGLE",
});

export const setActiveTab = (payload) => ({
  type: "SET_ACTIVE_TAB",
  payload: payload,
});

export const incrementCartItems = (payload) => ({
  type: "ADD_CART_ITEM",
  payload: payload,
});

export const removeCartItem = (payload) => ({
  type: "REMOVE_CART_ITEM",
  payload: payload,
});

const getBannersData = (payload) => ({
  type: "GET_BANNERS",
  payload: payload,
});

const getCategoriesData = (payload) => ({
  type: "GET_CATEGORIES",
  payload: payload,
});

const getProductsData = (payload) => ({
  type: "GET_PRODUCTS",
  payload: payload,
});

export function getBanners() {
  return function (dispatch) {
    return axios({
      method: AJAX_METHOD_GET,
      url: GET_BANNERS,
    })
      .then((response) => {
        dispatch(getBannersData(response.data));
      })
      .catch((error) => {
        console.log("Error : ", error.message);
      });
  };
}

export function getCategories() {
  return function (dispatch) {
    return axios({
      method: AJAX_METHOD_GET,
      url: GET_CATEGORIES,
    })
      .then((response) => {
        dispatch(getCategoriesData(response.data));
      })
      .catch((error) => {
        console.log("Error : ", error.message);
      });
  };
}

export function getProducts() {
  return function (dispatch) {
    return axios({
      method: AJAX_METHOD_GET,
      url: GET_PRODUCTS,
    })
      .then((response) => {
        dispatch(getProductsData(response.data));
      })
      .catch((error) => {
        console.log("Error : ", error.message);
      });
  };
}

export function buyNowItems(items) {
  return function (dispatch) {
    return axios({
      method: AJAX_METHOD_POST,
      url: POSTS,
    })
      .then((response) => {
        if (response.data[0].addToCart.response === "Success") {
          dispatch(incrementCartItems(items));
        }
      })
      .catch((error) => {
        console.log("Error : ", error.message);
      });
  };
}

export function loggedIn() {
  return function (dispatch) {
    return axios({
      method: AJAX_METHOD_POST,
      url: POSTS,
    })
      .then((response) => {
        if (response.data[0].addToCart.response === "Success") {
        }
      })
      .catch((error) => {
        console.log("Error : ", error.message);
      });
  };
}
