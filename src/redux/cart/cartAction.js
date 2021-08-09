import {
    CHANGE_CART_STATUS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    FETCH_FROM_CART,
  } from "./cartTypes"
  
  export const changecartstatus = () => {
    return {
      type: CHANGE_CART_STATUS,
    };
  };
  
  export const addtocart = (product) => {
    return {
      type: ADD_TO_CART,
      payload: product,
    };
  };
  
  export const removefromcart = (product) => {
    return {
      type: REMOVE_FROM_CART,
      payload: product,
    };
  };
  export const fetchfromcart = () => {
    return {
      type: FETCH_FROM_CART,
    };
  };