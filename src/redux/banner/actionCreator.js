import { GET_BANNER } from "./actionType";
import { headers, URL } from "../config";
import axios from "axios";

export const getbanner = () => async (dispatch) => {
  let response = await axios.get(URL + "/banners", headers);
  dispatch({
    type: GET_BANNER,
    payload: response.data,
    loader: false,
  });
};
// Content-Type": "application/json",
//       Accept: "application/json",
