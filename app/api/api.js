import axios from 'axios';
import { BANNER_LIST_API, CATEGORIES_LIST_API, PRODUCTS_LIST_API } from "../api/apiUrls";
/**
 * function for get object of banner list details 
 */
export const getbannersListDetails = (successCallback, failureCallback) => {
  axios.get(BANNER_LIST_API)
    .then(response =>  {
      //checks
      if (response && response.status === 200 && response.data) {
        successCallback(response)
      }else{
        failureCallback(response)
      }
    })
    .catch(error => failureCallback(error))
  // urls in constants.
}

/**
 * function for get object of categories list details 
 */
export const getCategoriesListDetails = (successCallback,failureCallback) => {
  return axios.get(CATEGORIES_LIST_API)
  .then(response =>  {
    //checks
    if (response && response.status === 200 && response.data) {
      successCallback(response)
    }else{
      failureCallback(response)
    }
  })
  .catch(error => failureCallback(error))
}


/**
 * function for get object of products list details 
 */

export const getProductsDetails = (successCallback , failureCallback) => {
  return axios.get(PRODUCTS_LIST_API)
  .then(response =>  {
    //checks
    if (response && response.status === 200 && response.data) {
      successCallback(response)
    }else{
      failureCallback(response)
    }
  })
  .catch(error => failureCallback(error))
}


