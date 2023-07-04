import api from "./config";
export const fetchBanners = async () => {
  const response = await api.request("/banners", {
    method: "GET",
  });
  return response?.data || [];
};
