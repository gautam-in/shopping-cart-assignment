import axios from 'axios';

export default {
  banners: () =>
    axios.get(`${process.env.Base_URL}/banners`).then((res) => res.data),
  categories: () =>
    axios.get(`${process.env.Base_URL}/categories`).then((res) => res.data),
  getproductsData: () =>
    axios.get(`${process.env.Base_URL}/products`).then((res) => res.data),
};
