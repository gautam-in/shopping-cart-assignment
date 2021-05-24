import { GET_PRODUCT } from "./actionType";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  let response = await axios.get("http://localhost:5000/products");
  dispatch({
    type: GET_PRODUCT,
    payload: response.data,
    loader: false,
  });
};
