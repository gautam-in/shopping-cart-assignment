export default function service(serviceName, params) {
  const URL = "http://localhost:5000";

  const service = {
    products: {
      method: "GET",
      url: `${URL}/products`,
    },
    categories: {
      method: "GET",
      url: `${URL}/categories`,
    },
    banners: {
      method: "GET",
      url: `${URL}/banners`,
    },
    addToCart: {
      method: "POST",
      url: `${URL}/addToCart`,
      body: params,
    },
  };
  return service[serviceName];
}
