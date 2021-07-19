import axios from "../../helpers/axios";
import { bannersConstants } from "./constants";

const getAllBanners = () => {
  return async (dispatch) => {
    dispatch({ type: bannersConstants.GET_ALL_BANNERS_REQUEST });
    const res = await axios.get(`/banners`);
console.log("bannerrr",res)
    if (res.status === 200) {
      const { data } = res;

      dispatch({
        type: bannersConstants.GET_ALL_BANNERS_SUCCESS,
        payload: { banners: data },
      });
    } else {
      dispatch({
        type: bannersConstants.GET_ALL_BANNERS_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};


export { getAllBanners };