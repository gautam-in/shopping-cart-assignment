import axios from "axios";

export const fetchCategories = async () => {
  const API_ENDPOINT = "http://localhost:3000";

  try {
    const response = await axios.get(`${API_ENDPOINT}/categories`);

    if (response.status !== 200) {
      throw new Error("Failed to fetch categories.");
    }

    return response.data;
  } catch (error) {
    throw new Error("An error occurred while fetching categories.");
  }
};
