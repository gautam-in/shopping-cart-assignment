import Axios from 'axios';

/* Setting the baseURL for the axios instance. */
const baseURL = 'http://localhost:5000';

/* Creating a new instance of Axios with the baseURL and headers. */
export const axios = Axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application-json'
  }
});

export const getUri = () => baseURL;
