import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";

export const getProducts = (id) => {
  return async (dispatch) => {
    let response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/products`);
    if (id !== "All") {
      response.data = response.data.filter((product) => product.category === id);
    }
    dispatch({
      type: GET_PRODUCTS,
      payload: response.data,
    });
  };
};
