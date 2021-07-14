import axios from "axios";

const apiURL = `http://localhost:5000`;
const apiHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const getBannerListAPI = async () => {
  try {
    const response = await axios.get(`${apiURL}/banners`, apiHeaders);
    if ((response.status = 200)) {
      return response.data;
    }
    console.log("Something went wrong.");
  } catch (error) {
    throw "Error : Unable to fetch Banner List.";
  }
};

export const getCategoryListAPI = async () => {
  try {
    const response = await axios.get(`${apiURL}/categories`, apiHeaders);
    if ((response.status = 200)) {
      return response.data;
    }
    console.log("Something went wrong.");
  } catch (error) {
    throw "Error : Unable to fetch Category List.";
  }
};

export const getProductListAPI = async () => {
  try {
    const response = await axios.get(`${apiURL}/products`, apiHeaders);
    if ((response.status = 200)) {
      return response.data;
    }
    console.log("Something went wrong.");
  } catch (error) {
    throw "Error : Unable to fetch Product List.";
  }
};

export const postAddToCart = async (product) => {
  try {
    const response = await axios.post(
      `${apiURL}/addToCart`,
      { productId: product.id },
      apiHeaders
    );
    if ((response.status = 200)) {
      return response.data;
    }
    console.log("Something went wrong.");
  } catch (error) {
    throw "Error : Unable to post Product Item";
  }
};
