import axios from 'axios';

export default {
  banners: () =>
    axios.get(`${process.env.Base_URL}/banners`).then((res) => res.data),
  getCategories: () =>
    axios.get(`${process.env.Base_URL}/categories`).then((res) => res.data),
  getProducts: () =>
    axios.get(`${process.env.Base_URL}/products`).then((res) => res.data),
  addToCart: (product) =>
    axios
      .post(`${process.env.Base_URL}/addToCart`, {product})
      .then((res) => res.data),
};
