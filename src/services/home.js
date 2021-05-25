import handleResponse from "helpers/handleAPIResponse";

const baseUrl = "http://localhost:3000/servers/";

const fetchOffers = () => {
  return fetch(`${baseUrl}banners/index.get.json`)
    .then(handleResponse)
    .then((resp) => {
      console.log({ resp });
      if (resp.isError) {
        throw new Error("Get offer details failed");
      } else {
        return resp;
      }
    })
    .catch((err) => {
      throw new Error(err?.message ?? "Get offer details failed"); // eslint-disable-line
    });
};

export const fetchCategories = () => {
  return fetch(`${baseUrl}categories/index.get.json`)
    .then(handleResponse)
    .then((resp) => {
      if (resp.isError) {
        throw new Error("Get categories failed");
      } else {
        return resp;
      }
    })
    .catch((err) => {
      throw new Error(err?.message ?? "Get categories failed"); // eslint-disable-line
    });
};

export default fetchOffers;
