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

  async userLogin({ email, password }) {
    try {
      const response = await axiosInstance({
        ...this.getAuthHeaders({
          method: this.methods.POST,
          url: this.urls.Login,
          data: { email: email, password: password },
        }),
      });
      if (response.statusText !== "OK") {
        throw new Error(response.data.message);
      }
      return response.data;
    } catch (err) {
      console.log("userLogin ERROR", err);
      return {
        error: err.response.data.message || err.message,
        errMsg: JSON.parse(err.request.response),
      };
    }
  }

  async userRegister({ email, password, fname, lname }) {
    try {
      const response = await axiosInstance({
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
      return response.data;
    } catch (err) {
      console.log("userRegister ERROR", err);
      return {
        error: err.response.data.message || err.message,
        errMsg: JSON.parse(err.request.response),
      };
    }
  }

  async loadBanners() {
    try {
      const response = await axiosInstance({
        ...this.getDbHeaders({
          method: this.methods.GET,
          url: this.urls.Banners,
        }),
      });
      return response;
    } catch (err) {
      console.log("loadBanners ERROR", err);
      return {
        error: err.response.data.message || err.message,
        errMsg: JSON.parse(err.request.response),
      };
    }
  }

  async loadCategories() {
    try {
      const response = await axiosInstance({
        ...this.getDbHeaders({
          method: this.methods.GET,
          url: this.urls.Categories,
        }),
      });
      return response;
    } catch (err) {
      console.log("loadCategories ERROR", err);
      return {
        error: err.response.data.message || err.message,
        errMsg: JSON.parse(err.request.response),
      };
    }
  }
}
export default APIConfig;
