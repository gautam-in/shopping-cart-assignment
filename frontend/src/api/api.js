import axiosInstance from "../axios";

class APIConfig {
  constructor() {
    this.AUTH_URL = document.location.href.startsWith("http://localhost")
      ? "http://localhost:3000"
      : "";

    this.DB_URL = document.location.href.startsWith("http://localhost")
      ? "http://localhost:5001"
      : "";

    this.methods = {
      GET: "GET",
      POST: "POST",
    };

    this.urls = {
      Login: "/login",
      Register: "/register",
      Banners: "/banners",
      Categories: "/categories",
      Products: "/products",
      AddCart: "/addToCart",
    };
  }

  getUrls = () => {
    return this.urls;
  };

  getAuthHeaders = ({ method, url, ...other }) => {
    return {
      url: `${this.AUTH_URL}${url}`,
      method: method,
      headers: { "Content-Type": "application/json" },
      ...other,
    };
  };

  getDbHeaders = ({ method, url, ...other }) => {
    return {
      url: `${this.DB_URL}${url}`,
      method: method,
      headers: { "Content-Type": "application/json" },
      ...other,
    };
  };

  onErrorHandler = (key, err) => {
    console.log(`${key} ----> error`);
    let errors = {};
    if (err && err.response && err.response.data && err.response.data.message) {
      errors.err = err.response.dataerr.response.data.message;
    } else if (err.message) {
      errors.err = err.message;
    }

    if (err && err.request && err.request.response) {
      errors.errMsg = JSON.parse(err.request.response);
    }

    return errors;
  };

  async userLoginAsync({ email, password }) {
    try {
      return await axiosInstance({
        ...this.getAuthHeaders({
          method: this.methods.POST,
          url: this.urls.Login,
          data: { email: email, password: password },
        }),
      });
    } catch (err) {
      return this.onErrorHandler("LOGIN", err);
    }
  }

  async userRegisterAsync({ email, password, fname, lname }) {
    try {
      return await axiosInstance({
        ...this.getAuthHeaders({
          method: this.methods.POST,
          url: this.urls.Register,
          data: {
            email: email,
            password: password,
            firstname: fname,
            lastname: lname,
          },
        }),
      });
    } catch (err) {
      return this.onErrorHandler("REGISTER", err);
    }
  }

  async loadBannersAsync() {
    try {
      return await axiosInstance({
        ...this.getDbHeaders({
          method: this.methods.GET,
          url: this.urls.Banners,
        }),
      });
    } catch (err) {
      return this.onErrorHandler("BANNERS", err);
    }
  }

  async loadCategoriesAsync() {
    try {
      return await axiosInstance({
        ...this.getDbHeaders({
          method: this.methods.GET,
          url: this.urls.Categories,
        }),
      });
    } catch (err) {
      return this.onErrorHandler("CATEGORIES", err);
    }
  }

  async loadProductsAsync() {
    try {
      return await axiosInstance({
        ...this.getDbHeaders({
          method: this.methods.GET,
          url: this.urls.Products,
        }),
      });
    } catch (err) {
      return this.onErrorHandler("PRODUCTS", err);
    }
  }

  async addToCartAsync() {
    try {
      return await axiosInstance({
        ...this.getDbHeaders({
          method: this.methods.POST,
          url: this.urls.AddCart,
        }),
      });
    } catch (err) {
      return this.onErrorHandler("ADD CART", err);
    }
  }
}
export default APIConfig;
