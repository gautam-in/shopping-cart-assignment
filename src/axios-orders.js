import axios from "axios";

const instance = axios.create({
  baseURL: "http://0.0.0.0:3001/",
});

export default instance;
