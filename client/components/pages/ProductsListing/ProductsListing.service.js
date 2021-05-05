export const getProducts = () => {
  return fetch(process.env.API_URL + "/products", {
    method: "GET",
  }).then((response) => response.json());
};

export const getCategories = () => {
  return fetch(process.env.API_URL + "/categories", {
    method: "GET",
  }).then((response) => response.json());
};
