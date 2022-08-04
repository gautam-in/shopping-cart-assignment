import axios from "axios";

export const getAxiosData = async (url) => {
  let response = [];
  await axios
    .get(url)
    .then(({ data }) => {
      response.push(...data);
    })
    .catch((error) => console.log("error in getting data", error));

  return [...response];
};
export const postAxiosData = async (url, params) => {
  let response;
  await axios
    .post(url, params)
    .then(({ data }) => {
      response = data;
    })
    .catch((error) => console.log("error in posting data", error));

  return response;
};
