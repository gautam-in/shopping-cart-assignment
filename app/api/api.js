import axios from 'axios';

/**
 * function for get object of banner list details 
 */
export const getbannersListDetails = (successCallback, failureCallback) => {
  axios.get('http://localhost:5000/banners')
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
export const getCategoriesListDetails = () => {
  return axios.get('http://localhost:5000/categories').then(response => response).catch(error => error)
}


/**
 * function for get object of products list details 
 */

export const getProductsDetails = (successCallback , failureCallback) => {
  return axios.get('http://localhost:5000/products')
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


