import { axiosInstance } from "../axios";

const axiosAPI = {
  products: {
    get: () => {
      return axiosInstance.get(`/products`);
    },
    getById: (id) => {
      return axiosInstance.get(`/products/${id}`);
    },
  },
  category: {
    get: () => {
      return axiosInstance.get(`/categories`);
    },
  },
  banner: {
    get: () => {
      return axiosInstance.get(`/banners`);
    },
  },
  cart: {
    get: () => {
      return axiosInstance.get(`/addTOCart`);
    },
    post: (obj) => {
      return axiosInstance.post(`/addTOCart`, obj);
    },
    getById: (id) => {
      return axiosInstance.get(`/addTOCart/${id}`);
    },
    put: (id, data) => {
      return axiosInstance.put(`/addTOCart/${id}`, data);
    },
    delete: (id) => {
      return axiosInstance.delete(`/addTOCart/${id}`);
    },
  },
  login: {
    getById: (id) => {
      return axiosInstance.get(`/users/${id}`);
    },
    post: (obj) => {
      return axiosInstance.post(`/users`, obj);
    },
  },
};

export default axiosAPI;
