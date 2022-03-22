import Axios from "axios";

class ApiRequestService {
  constructor() {
    this.baseURL = process.env.REACT_APP_BASE_URL;
    this.headers = {
      "content-type": "application/json",
    };
    this.axiosService = Axios.create({
      baseURL: this.baseURL,
    });
  }

  getApi(path, headers = this.headers, params = {}) {
    return new Promise((resolve, reject) => {
      this.axiosService
        .get(path, {
          headers,
          params,
        })
        .then((res) => {
          resolve({
            status: res.status === 200,
            statusText: res.statusText,
            data: res.data,
          });
        })
        .catch((error) => {
          reject({
            message: error?.response?.data?.error,
            status: false,
            statusText: "Error",
          });
        });
    });
  }

  postApi(path, apiData, headers = this.headers) {
    return new Promise((resolve, reject) => {
      this.axiosService
        .post(path, apiData, {
          headers,
        })
        .then((res) => {
          resolve({
            message: res.data.responseMessage,
            status: res.status === 200,
            statusText: res.statusText,
            data: res.data,
          });
        })
        .catch((error) => {
          reject({
            message: error?.response?.data?.error,
            status: false,
            statusText: "Error",
          });
        });
    });
  }
}

export default new ApiRequestService();
