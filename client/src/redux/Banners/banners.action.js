import axios from "axios";
export const GET_ALL_BANNERS = "GET_ALL_BANNERS";
export const GET_BANNERS_FAILED = "GET_BANNERS_FAILED";

export const getBanners = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`https://sabka-0-bazaar.herokuapp.com/banners`);
      console.log(process.env.REACT_APP_SERVER_URL);
      dispatch({
        type: GET_ALL_BANNERS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_BANNERS_FAILED,
        payload: error,
      });
    }
  };
};
