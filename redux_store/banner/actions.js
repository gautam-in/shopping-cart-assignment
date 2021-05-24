import {
   FETCH_BANNER_START,
   FETCH_BANNER_OK,
   FETCH_BANNER_ERROR,
} from './constants';
import axios from "axios"

//Action Creator
export const fetchBannerOk = (banners) => ({
   type: FETCH_BANNER_OK,
   payload: {banners}
});

export const fetchBannerStart = () => ({
   type: FETCH_BANNER_START
});

export const fetchBannerError = (error) => ({
   type: FETCH_BANNER_ERROR,
   payload: {error}
});


// API Calls
export function fetchBanner() {
   return dispatch => {
      dispatch(fetchBannerStart());
      return axios({
         method: 'get',
         baseURL: 'http://localhost:5000',
         url: '/banners',
         headers: {
            Accept : 'appliation/json'
         }
      })
      .then(function (response) {
         dispatch(fetchBannerOk(response.data))
      })
      .catch(function (error) {
         dispatch(fetchBannerError(error))
      });
   }
}