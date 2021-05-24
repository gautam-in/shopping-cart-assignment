import { GET_PRODUCT } from "./actionType";
import { headers, URL } from "../config";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  let response = await axios.get(URL + "/products", headers);
  dispatch({
    type: GET_PRODUCT,
    payload: response.data,
    loader: false,
  });
};
