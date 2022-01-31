import http from "./index";

const PREFIX = "/products";
export const fetchProducts = () => http.get(PREFIX);
export const fetchProductsById = async (id) => {
  let response = await http.get(PREFIX);
  if (response.status === 200) {
    let data = response.data.filter(({ category }) => category === id);
    return { ...response, data };
  }
  return {};
};
