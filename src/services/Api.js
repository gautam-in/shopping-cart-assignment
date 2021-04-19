import axios from 'axios';

export default {
  banners: () => axios.get(`http://localhost:5000/banners`).then((res) => res.data),
  categories: () => axios.get(`http://localhost:5000/categories`).then((res) => res.data)
};
