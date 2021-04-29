import {
   FETCH_CATEGORY_START,
   FETCH_CATEGORY_OK,
   FETCH_CATEGORY_ERROR,
} from './constants';
import axios from "axios"

//Action Creator
export const fetchCategoryOk = (category) => ({
   type: FETCH_CATEGORY_OK,
   payload: {category}
});

export const fetchCategoryStart = () => ({
   type: FETCH_CATEGORY_START
});

export const fetchCategoryError = (error) => ({
   type: FETCH_CATEGORY_ERROR,
   payload: {error}
});


// API Calls
export function fetchCategory() {
   return dispatch => {
      dispatch(fetchCategoryStart());
      return axios({
         method: 'get',
         baseURL: 'http://localhost:5000',
         url: '/categories',
         headers: {
            Accept : 'appliation/json'
         }
      })
      .then(function (response) {
         debugger
         dispatch(fetchCategoryOk(response.data));
      })
      .catch(function (error) {
         dispatch(fetchCategoryError(error))
      });
   }
}