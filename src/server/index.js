import axios from "axios";

const BASE_URL = "http://localhost:5000/";

export const get = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}${url}`);
    return response;
  } catch (e) {
    return e;
  }
};
