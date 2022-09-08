export const domain_port = "http://localhost:3000";
const axios = require('axios').default;
axios.defaults.withCredentials = true;
//network call
const network = async (uri, options = {}) => {
  try {
    const newOptions = { ...options };
    newOptions.headers = {
      "Content-Type": "application/json",
      "withCredentials":true
    };

    const response = await axios(`${domain_port}${uri}`, newOptions);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.status);
  }
};

export { network };
