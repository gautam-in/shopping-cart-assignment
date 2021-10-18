import axios from "axios";
const api = "http://localhost:5000";
export const getBannerList = async() => {
  try {
    const resp = await axios.get(`${api}/banners`);
    if (resp.status === 200) {
      return resp.data;
    } 
    console.log('something went wrong');
  } catch (error) {
    console.log("Unable to fetch banner's list", error);
  }
};
export const getCategoryList = async() => {
  try {
    const resp = await axios.get(`${api}/categories`);
    if (resp.status === 200) {
      return resp.data
    } 
    console.log('something went wrong');
  } catch (error) {
    console.log("Unable to fetch category list");
  }
};
export const getProductList = async() => {
  try {
    const resp = await axios.get(`${api}/products`);
    if (resp.status === 200) {
      return resp.data
    } 
    console.log('something went wrong');
  } catch (error) {
    console.log("Unable to fetch product list");
  }
};
export const addToCartService = async() => {
  try {
    const resp = await axios.post(`${api}/addToCart`);
    if (resp.status === 200) {
      return resp.data
    } 
    console.log('something went wrong, Please try again.');
  } catch (error) {
    console.log("Unable to fetch the product list.");
  }
}; 