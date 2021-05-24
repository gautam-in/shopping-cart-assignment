import handleResponse from "helpers/handleAPIResponse";

const baseUrl = "http://localhost:3000/server/";

// const url = "server/banners/index.get.json";
// const url = "./banners.json";
const fetchOffers = () => {
  return fetch(`${baseUrl}banners/index.json`, {
    // return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(handleResponse)
    .then((resp) => {
      console.log({ resp });
      if (!resp.isSuccessful) {
        throw new Error(resp.message.message);
      } else {
        return resp.result;
      }
    })
    .catch((err) => {
      throw new Error(err?.message ?? "Get offer details failed"); // eslint-disable-line
    });
};

export default fetchOffers;
