import axios from "axios";

export const getBanners = () => {
  const url = `http://localhost:3000/banners`;

  let banners = axios
    .get(url)
    .then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
  return Promise.resolve(banners);
};

export const getCategories = () => {
  const url = `http://localhost:3000/categories`;

  let categories = axios
    .get(url)
    .then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
  return Promise.resolve(categories);
};

export const getProducts = () => {
  const url = `http://localhost:3000/products`;

  let products = axios
    .get(url)
    .then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
  return Promise.resolve(products);
};

export const addToCart = (productId, product) => {
  const url = `http://localhost:3000/addToCart`;

  let msg = axios
    .post(url, productId)
    .then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
  return Promise.resolve(msg);
};

export const VALIDATION_PATTERN = {
  email: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,

  password: /(?=^.{6,30}$)(?=.*\d)(?=.*[a-zA-Z])(?!.*\s)/,
};
