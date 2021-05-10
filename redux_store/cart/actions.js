import {
   TOGGLE_CART,
   ADD_TO_CART_START,
   ADD_TO_CART,
   ADD_TO_CART_ERROR,
   REMOVE_FORM_CART,
} from './constants';
import axios from "axios"

//Action Creator
export const toggleCartModal = () => ({
   type: TOGGLE_CART,
});

export const addToCartStartAction = (product_id) => ({
   type: ADD_TO_CART_START,
   payload: {product_id},
});

export const addToCartAction = (product_id) => ({
   type: ADD_TO_CART,
   payload: {product_id},
});

export const addToCartErrorAction = (product_id, message) => ({
   type: ADD_TO_CART_ERROR,
   payload: {product_id, message},
});

export const removeFromCartAction = (product_id) => ({
   type: REMOVE_FORM_CART,
   payload: {product_id},
});

export function toggleCart() {
   return dispatch => {
      dispatch(toggleCartModal());
   }
}

export function addToCart(product_id) {
   return dispatch => {
      dispatch(addToCartStartAction(product_id));
      return axios({
         method: 'post',
         baseURL: 'http://localhost:5000',
         url: '/addToCart',
         headers: {
            Accept: 'appliation/json'
         }
      })
      .then(function (response) {
         if (response.data.response == "Success") {
            dispatch(addToCartAction(product_id))
         } else {
            throw { message: response.data.responseMessage }
         }
      })
         .catch(function (error) {
         console.error(error)
         dispatch(addToCartErrorAction(product_id, error.message))
      });
   }
}


export function removeFromCart(product_id) {
   return dispatch => {
      debugger
      dispatch(removeFromCartAction(product_id))
   }
}
