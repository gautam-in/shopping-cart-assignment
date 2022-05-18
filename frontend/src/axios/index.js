import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
  timeoutErrorMessage: "Timeout! try after some time",
});

// axiosInstance.interceptors.response.use(
//   function (response) {
//     return response.data;
//   },
//   function (error) {
//     if (error && error.response.data) {
//       return Promise.reject(new Error(error.response.data));
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
