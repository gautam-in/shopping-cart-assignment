import Axios from 'axios';

const baseURL = 'http://localhost:5000';
export const axios = Axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application-json'
  }
});

export const getUri = () => baseURL;
