import axios from 'axios';

const baseUrl = 'http://localhost:5000/';

export default {
  banners: () => axios.get(`${baseUrl}banners`).then((res) => res.data),
  getCategories: () => axios.get(`${baseUrl}categories`).then((res) => res.data),
  getProducts: () => axios.get(`${baseUrl}products`).then((res) => res.data)
};
