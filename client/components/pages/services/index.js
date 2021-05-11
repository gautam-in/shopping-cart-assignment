import * as service from "../../../../server/productsList";
let getOffersForCarousel;
let getProducts;
let getCategories;

if (process.env.NODE_ENV === "production") {
  getOffersForCarousel = service.banners;
  getProducts = service.products;
  getCategories = service.categories;
} else if (process.env.NODE_ENV === "development") {
  getOffersForCarousel = () => {
    console.log("Server service called");
    return fetch(process.env.API_URL + "/banners", {
      method: "GET",
    }).then((response) => response.json());
  };

  getProducts = () => {
    console.log("Server service called");
    return fetch(process.env.API_URL + "/products", {
      method: "GET",
    }).then((response) => response.json());
  };

  getCategories = () => {
    return fetch(process.env.API_URL + "/categories", {
      method: "GET",
    }).then((response) => response.json());
  };
}

export { getOffersForCarousel, getProducts, getCategories };

/* export const getOffersForCarousel = service.banners;
export const getProducts = service.products;
export const getCategories = service.categories; */
