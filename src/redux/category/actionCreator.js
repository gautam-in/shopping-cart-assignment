import { GET_CATEGORY } from "./actionType";
import axios from "axios";

export const getCategory = () => async (dispatch) => {
  let response = await axios.get("http://localhost:5000/categories");
  dispatch({
    type: GET_CATEGORY,
    payload: response.data,
    loader: false,
  });
};
