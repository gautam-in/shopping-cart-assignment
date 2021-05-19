import * as service from "../../../../server/jsonToPromise";
let getOffersForCarousel;
let getProducts;
let getCategories;
let postAddToCart;

if (process.env.NODE_ENV === "production") {
  getOffersForCarousel = service.banners;
  getProducts = service.products;
  getCategories = service.categories;
  postAddToCart = service.addToCart;
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
  postAddToCart = (id) => {
    return fetch(process.env.API_URL + "/addToCart", {
      method: "POST",
      body: {
        productId: id,
      },
    }).then((response) => response.json());
  };
}

export { getOffersForCarousel, getProducts, getCategories, postAddToCart };

/* export const getOffersForCarousel = service.banners;
export const getProducts = service.products;
export const getCategories = service.categories; */
