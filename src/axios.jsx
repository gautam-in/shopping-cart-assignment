import axios from "axios";

export const baseURL = "http://localhost:3000";

export const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 500000,
  headers: {
    // Authorization: localStorage.getItem("access_token")
    //   ? "Bearer " + localStorage.getItem("access_token")
    //   : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
