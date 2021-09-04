import { getData } from "../../utility/Datahandler";
import { getBanners, getProducts, getCategories, setError } from "./actions";

export const fetchBanners = () => {
  return (dispatch) => {
    getData("/banners")
      .then((response) => {
        dispatch(getBanners(response));
        dispatch(setError(''))
      })
      .catch((error) => {
        console.log(`Some thing went wrong ${error}`);
        dispatch(setError(error))
      });
  };
};

export const fetchCategories = () => {
  return (dispatch) => {
    getData("/categories")
      .then((response) => {
        dispatch(getCategories(response));
        dispatch(setError(''))
      })
      .catch((error) => {
        console.log(`Some thing went wrong ${error}`);
        dispatch(setError(error))
      });
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    getData("/products")
      .then((response) => {
        dispatch(getProducts(response));
        dispatch(setError(''));
      })
      .catch((error) => {
        console.log(`Some thing went wrong ${error}`);
        dispatch(setError(error));
      });
  };
};
