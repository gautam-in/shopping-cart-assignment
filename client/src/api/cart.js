import api from "./config";

export const addProductToCart = async () => {
  const response = await api.request("/addToCart", {
    method: "POST",
  });
  return response.data;
};
