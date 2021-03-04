import axios from 'axios';

/**
 * function for get object of banner list details 
 */
export const getbannersListDetails = () => {
  return axios.get('http://localhost:5000/banners').then(response => response).catch(error => error)

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

export const getProductsDetails = () => {
  return axios.get('http://localhost:5000/products').then(response => response).catch(error => error)
}


