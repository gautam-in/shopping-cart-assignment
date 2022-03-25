import { API_BASE_URL } from './env';

const root = API_BASE_URL;

const API_END_POINTS = {
  banners: `${root}/banners`,
  categories: `${root}/categories`,
  products: `${root}/products`,
  cart: `${root}/cart`,
};

export default API_END_POINTS;
