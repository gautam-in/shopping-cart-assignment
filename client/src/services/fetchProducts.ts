import axios from "axios";

export const fetchProducts = async () => {
  const API_ENDPOINT = "http://localhost:3000";

  try {
    const response = await axios.get(`${API_ENDPOINT}/products`);

    if (response.status !== 200) {
      throw new Error("Failed to fetch products.");
    }

    return response.data;
  } catch (error) {
    throw new Error("An error occurred while fetching products.");
  }
};
