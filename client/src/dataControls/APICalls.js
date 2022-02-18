const productsURL = "http://localhost:5000/products";
const categoriesURL = "http://localhost:5000/categories";
const bannersURL = "http://localhost:5000/banners";

async function apiCall({ url, method, success, error }) {
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

class APICalls {
  static getCategories() {
    return new Promise((resolve, reject) => {
      apiCall({
        url: categoriesURL,
        method: "GET",
        success: (response) => {
          console.log("getCategories :: Successfully fetch Categories :=>");

          resolve(response);
        },
        error: (err) => {
          console.log("getCategories :: failed to fetch Categories :=>", err);
          reject(err);
        },
      });
    });
  }

  static getBanners() {
    return new Promise((resolve, reject) => {
      apiCall({
        url: bannersURL,
        method: "GET",
        success: (response) => {
          console.log("getBanners :: successfully fetch banners :=>");
          resolve(response);
        },
        error: (err) => {
          console.log("getBanners :: failed to fetch banners :=>", err);
          reject(err);
        },
      });
    });
  }

  static getProducts() {
    return new Promise((resolve, reject) => {
      apiCall({
        url: productsURL,
        method: "GET",
        success: (response) => {
          console.log("getProducts :: successfully fetch products :=>" , response);
          resolve(response);
        },
        error: (err) => {
          console.log("getProducts :: failed to fetch products :=>", err);
          reject(err);
        },
      });
    });
  }
}

export default APICalls;
