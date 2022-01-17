import axios from "axios";

const baseUrl = "http://localhost:5000/";

export const axiosFetch = (endpoint) => {
  return axios.get(baseUrl + endpoint).then((resp) => {
    console.log(endpoint + ":", resp);
    return resp.data;
  });
};

export const axiosPost = (endpoint, payload) => {
  return axios.post(baseUrl + endpoint, payload).then((resp) => {
    console.log(endpoint + ":", resp);
    return resp.data;
  });
};
