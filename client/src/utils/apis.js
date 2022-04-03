import axios from 'axios';

const BASE_URL = 'http://localhost:8989/';

export const get = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}${url}`);
    return response;
  } catch (error) {
    return error;
  }
};
