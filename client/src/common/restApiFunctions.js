import axios from 'axios';

/* eslint-disable */
export const postWithResponseObject = async (
  url,
  data,
  headers = null) => {
  try {
    if (!headers) {
      headers = { 'Content-type': 'application/json' };
    }
    const response = await axios
      .post(url, data, { headers })
      .catch((error) => {
        if (error.response) {
          return error.response;
        } if (error.request) {
          return error.request;
        }
        return error;
      });
    return response;
  }
  catch (error) {
    console.log('Error data: ', error);
  }
};
