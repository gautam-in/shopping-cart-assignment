import { GET_BANNER } from "./actionType";
import axios from "axios";

export const getbanner = () => async (dispatch) => {
  let response = await axios.get("http://localhost:5000/banners");
  dispatch({
    type: GET_BANNER,
    payload: response.data,
    loader: false,
  });
};
