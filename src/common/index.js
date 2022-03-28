import axios from "axios";

const BASE_URL = "http://localhost:5001/";

const get = async (url) => {
  try {
    return await axios.get(`${BASE_URL}${url}`);
  } catch (error) {
    return error;
  }
}

export {get};