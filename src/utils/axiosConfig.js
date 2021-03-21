import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'http://localhost:5000/',
  headers: { 'X-Requested-With': 'XMLHttpRequest', Accept: 'application/json' },
  responseType: 'json',
});

export default axiosConfig;
