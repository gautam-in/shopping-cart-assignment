import {
   FETCH_PRODUCT_START,
   FETCH_PRODUCT_OK,
   FETCH_PRODUCT_ERROR,
} from './constants';
import axios from "axios"

//Action Creator
export const fetchProductOk = (product) => ({
   type: FETCH_PRODUCT_OK,
   payload: {product}
});

export const fetchProductStart = () => ({
   type: FETCH_PRODUCT_START
});

export const fetchProductError = (error) => ({
   type: FETCH_PRODUCT_ERROR,
   payload: {error}
});


// API Calls
export function fetchProduct() {
   return dispatch => {
      dispatch(fetchProductStart());
      return axios({
         method: 'get',
         baseURL: 'http://localhost:5000',
         url: '/products',
         headers: {
            Accept : 'appliation/json'
         }
      })
      .then(function (response) {
         dispatch(fetchProductOk(response.data));
      })
      .catch(function (error) {
         dispatch(fetchProductError(error))
      });
   }
}