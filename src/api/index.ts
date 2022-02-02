import axios, { AxiosInstance } from "axios";
import { API_URL } from "../constants";
const instance: AxiosInstance = axios.create({ baseURL: API_URL });

// instance.interceptors.request.use(config => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.common.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default instance;
