import apiClient from "./apiClient";

// get all categories api
export const getCategoriesAPI = () => apiClient.get("/categories");

// get banners api - carousel
export const getBannersApi = () => apiClient.get("/banners");
