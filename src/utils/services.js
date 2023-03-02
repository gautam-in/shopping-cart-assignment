import apiClient from "./apiClient";

// get all categories api
export const getCategoriesAPI = () => apiClient.get("/categories");

// get banners api - carousel
export const getBannersApi = () => apiClient.get("/banners");

// get the product list
export const getProductsApi = () => apiClient.get("/products");

//  add to cart API
export const addToCartApi = (reqBody) => apiClient.post("/addToCart", reqBody);
