import axios from 'axios';

const REACT_API_DOMAIN_URL = "http://localhost:3000";
const REACT_API_CLIENT_DOMAIN_URL = "http://localhost:5000";

export const getLogo = () => {
  return `${REACT_API_CLIENT_DOMAIN_URL}/static/images/logo.png`;
}

export const getCartIcon = () => {
  return `${REACT_API_CLIENT_DOMAIN_URL}/static/images/cart.svg`;
}

export const getBannerList = async () => {
  try {
    const resp = await axios.get(`${REACT_API_DOMAIN_URL}/banners`);
    if (resp.status === 200) {
      return resp.data;
    }
    console.error("something went wrong");
  } catch (error) {
    console.error("Unable to fetch banner images", error);
  }
};
export const getCategoryList = async () => {
  try {
    const resp = await axios.get(`${REACT_API_DOMAIN_URL}/categories`);
    if (resp.status === 200) {
      return resp.data;
    }
    console.error("something went wrong");
  } catch (error) {
    console.error("Unable to fetch category list");
  }
};
export const getProductList = async () => {
  try {
    const resp = await axios.get(`${REACT_API_DOMAIN_URL}/products`);
    if (resp.status === 200) {
      return resp.data;
    }
    console.error("something went wrong");
  } catch (error) {
    console.error("Unable to fetch product list");
  }
};