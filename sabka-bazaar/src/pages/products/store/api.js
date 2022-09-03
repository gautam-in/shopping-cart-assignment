import axios from "axios";
export const fetchProductsFromServer = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/products`
    );

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchCategoriesFromServer = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/categories`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
