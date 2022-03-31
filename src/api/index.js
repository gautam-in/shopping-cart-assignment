import axios from "../axios";
import {
  storeProducts,
  storeCategories,
  storeBanner,
} from "../redux/action/actions";

export const getProducts = () => {
  return (dispatch) =>
    axios({ method: "GET", url: "/products" })
      .then((resp) => {
        if (resp && resp.data) {
          dispatch(storeProducts(resp.data));
          return resp.data;
        }
        return resp;
      })
      .catch((error) => error);
};

export const getCategory = () => {
  return (dispatch) =>
    axios({ method: "GET", url: "/categories" })
      .then((resp) => {
        if (resp && resp.data) {
          dispatch(storeCategories(resp.data));
          return resp.data;
        }
        return resp;
      })
      .catch((error) => error);
};
export const getBanner = () => {
  return (dispatch) =>
    axios({ method: "GET", url: "/banners" })
      .then((resp) => {
        if (resp && resp.data) {
          dispatch(storeBanner(resp.data));
          return resp.data;
        }
        return resp;
      })
      .catch((error) => error);
};
