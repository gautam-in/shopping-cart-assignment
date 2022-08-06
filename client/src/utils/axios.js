import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:3001/api/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

export default instance;