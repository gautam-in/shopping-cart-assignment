import handleResponse from "helpers/handleAPIResponse";

const baseUrl = "http://localhost:5000/";

const fetchProducts = () => {
  return fetch(`${baseUrl}products`)
    .then(handleResponse)
    .then((resp) => {
      console.log({ resp });
      if (resp.isError) {
        throw new Error("Get products failed");
      } else {
        return resp;
      }
    })
    .catch((err) => {
      throw new Error(err?.message ?? "Get products failed"); // eslint-disable-line
    });
};

export const postProduct = (id) => {
  console.log({ id });
  return fetch(`${baseUrl}addToCart`, {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      Accept: "appliation/json",
    },
  })
    .then(handleResponse)
    .then((resp) => {
      console.log({ resp });
      if (resp.isError) {
        throw new Error("Add products failed");
      } else {
        return resp;
      }
    })
    .catch((err) => {
      throw new Error(err?.message ?? "Add products failed"); // eslint-disable-line
    });
};

export default fetchProducts;
