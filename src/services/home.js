import handleResponse from "helpers/handleAPIResponse";

const baseUrl = "http://localhost:5000/";

const fetchOffers = () => {
  return fetch(`${baseUrl}banners`)
    .then(handleResponse)
    .then((resp) => {
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
  return fetch(`${baseUrl}categories`)
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
