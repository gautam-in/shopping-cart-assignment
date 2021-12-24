import axios from 'axios';
import { BASE_URL } from './apiEndpoint';

const client = axios.create({
  baseURL: BASE_URL,
});

export const apiCall = async ({ method, endPoint, body = null }) => {
  const onSuccess = function (response) {
    return response.data;
  };

  const onError = function (error) {
    console.error('Request Failed:', error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      const { status, data, headers } = error.response;
      console.error('Error:', { status, data, headers });
      throw new Error()
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  try {
    const response = await client({ method, url: endPoint, data: JSON.stringify(body) });
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};
