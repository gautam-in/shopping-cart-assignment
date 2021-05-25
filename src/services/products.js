import handleResponse from "helpers/handleAPIResponse";

const baseUrl = "http://localhost:3000/servers/";

const fetchProducts = () => {
  return fetch(`${baseUrl}products/index.get.json`)
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
  return fetch(`${baseUrl}addToCart/index.post.json/${id}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
  })
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

export default fetchProducts;
