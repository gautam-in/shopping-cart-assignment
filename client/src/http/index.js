import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getAllBanners = () => api.get("/banners");
export const getAllCategories = () => api.get("/banners");
export const getAllProducts = () => api.get("/banners");
export const addTocart = () => api.post("/banners");
