import axios from "axios";

// TODO: 1. Add interceptor
export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-type": "application/json"
  }
});