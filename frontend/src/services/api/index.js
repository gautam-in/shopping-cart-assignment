import axios from 'axios';

const makeRequest = (url, method, data) => {
    return axios({
      method: method || 'get',
      url: url,
      data: JSON.stringify(data) || null
    });
  };

export default makeRequest;

