import axios from "axios";

export const fetchBanners = async () => {
  const API_ENDPOINT = "http://localhost:3000";

  try {
    const response = await axios.get(`${API_ENDPOINT}/banners`);

    if (response.status !== 200) {
      throw new Error("Failed to fetch banners.");
    }

    return response.data;
  } catch (error) {
    throw new Error("An error occurred while fetching banners.");
  }
};
