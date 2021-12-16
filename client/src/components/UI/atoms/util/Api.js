import axios from "axios";
export default {
  banners: () =>
    axios.get(`http://localhost:5000/banners`).then((res) => res.data),
  getCategories: () =>
    axios.get(`http://localhost:5000/categories`).then((res) => res.data),
  getProducts: () =>
    axios.get(`http://localhost:5000/products`).then((res) => res.data),
  addToCart: (product) =>
    axios
      .post(`http://localhost:5000/addToCart`, { product })
      .then((res) => res.data),
};
