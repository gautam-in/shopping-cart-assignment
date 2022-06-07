import axios from "axios";

export const getCategories = async () => {
  const categories = await axios.get("http://localhost:8000/categories");
  return categories.data;
};

export const getProducts = async () => {
  const productList = await axios.get("http://localhost:8000/products");
  return productList.data;
};
