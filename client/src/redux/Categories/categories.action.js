import axios from "axios";

export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";

export const getAllCategories = () => {
  return async (dispatch) => {
    let response = await axios.get(`https://sabka-0-bazaar.herokuapp.com/categories`);
    dispatch({
      type: GET_ALL_CATEGORIES,
      payload: response.data,
    });
  };
};
