let CategoriesURL = "http://localhost:5000/categories";
let BannersURL = "http://localhost:5000/banners";
let ProductsURL = "http://localhost:5000/products";

async function CallApi({ url, method, success, error }) {
  try {
    let api = await fetch(`${url}`, {
      method: method,
    });

    if (!api.ok) return error("ERROR");

    let apiResponse = await api.json();

    return success(apiResponse);
  } catch (err) {
    return error(err);
  }
}

export default class AjaxCall {
  static getCategories() {
    return new Promise((resolve, reject) => {
      CallApi({
        url: CategoriesURL,
        method: "GET",
        success: (response) => {
          console.log("success from get categories api call::");

          resolve(response);
        },
        error: (err) => {
          console.log("failed from get categories api call::", err);
          reject(err);
        },
      });
    });
  }

  static getBanners() {
    return new Promise((resolve, reject) => {
      CallApi({
        url: BannersURL,
        method: "GET",
        success: (response) => {
          console.log("success from get banners api call::");
          resolve(response);
        },
        error: (err) => {
          console.log("failed from get banners api call::", err);
          reject(err);
        },
      });
    });
  }

  static getProducts() {
    return new Promise((resolve, reject) => {
      CallApi({
        url: ProductsURL,
        method: "GET",
        success: (response) => {
          console.log("success from get products api call::");
          resolve(response);
        },
        error: (err) => {
          console.log("failed from get products api call::", err);
          reject(err);
        },
      });
    });
  }
}
