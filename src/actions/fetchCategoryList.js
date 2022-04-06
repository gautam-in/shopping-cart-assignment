import axios from "axios";

export const fetchCategoryList = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:5000/categories");
  let filteredData = [];
  if (data) {
    data.sort((a, b) => a.order - b.order);
    filteredData = data.filter((category) => category.order > 0);
  }

  dispatch({
    type: "FETCH_CATEGORY_LIST",
    payload: {
      categoryList: filteredData,
    },
  });
};
