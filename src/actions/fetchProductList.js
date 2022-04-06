import axios from "axios";

export const fetchProductList = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:5000/products");

  dispatch({
    type: "FETCH_PRODUCT_LIST",
    payload: {
      productList: data,
    },
  });
};
