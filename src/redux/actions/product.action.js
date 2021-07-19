import axios from "../../helpers/axios";
import { productsConstants } from "./constants";

const getAllProducts = () => {
  return async (dispatch) => {
    dispatch({ type: productsConstants.GET_ALL_PRODUCTS_REQUEST });
    const res = await axios.get(`products`);
    console.log("products", res);
    if (res.status === 200) {
      const { data } = res;

      dispatch({
        type: productsConstants.GET_ALL_PRODUCTS_SUCCESS,
        payload: { products: data },
      });
    } else {
      dispatch({
        type: productsConstants.GET_ALL_PRODUCTS_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export { getAllProducts };
