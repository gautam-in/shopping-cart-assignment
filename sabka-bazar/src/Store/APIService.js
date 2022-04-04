import axios from "axios";
const url = "http://localhost:5000/";

export function fetchAPIData(apiEndpoint) {
  return axios
    .get(`${url}/${apiEndpoint}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
}
