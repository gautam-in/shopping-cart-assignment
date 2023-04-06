import axios from 'axios';

export const apiService = (endpoint) => {
  const baseUrl = 'http://localhost:5000';
  return axios
    .get(`${baseUrl}/${endpoint}`)
    .then((res) => res.data)
    .catch((err) => err);
};
