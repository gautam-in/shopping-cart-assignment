export const checkLoggedIn = () => {
  return (
    (window.localStorage.getItem("isLoggedIn") &&
      JSON.parse(window.localStorage.getItem("isLoggedIn"))) ||
    false
  );
};

// All Api required for the "MY BAZAR APPLICATION"

const baseUrl = "http://localhost:5000";

export const registerApi = "";
export const loginApi = "";
export const getCategoryApi = `${baseUrl}/categories/`;
export const getProductApi = `${baseUrl}/products/`;
export const getBannerApi = `${baseUrl}/banners/`;
export const getCartApi = "";
export const postCartApi = "";
