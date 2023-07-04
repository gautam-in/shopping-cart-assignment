import api from "./config";

export const fetchCategories = async (...additionalConfig) => {
  if (localStorage.getItem("categories")) {
    const categories = JSON.parse(localStorage.getItem("categories"));
    if (categories?.length)
      return Promise.resolve(JSON.parse(localStorage.getItem("categories")));
  }
  const response = await api.request("/categories", {
    method: "GET",
    ...additionalConfig,
  });

  const categories = [...(response?.data || [])]
    .sort((a, b) => a.order - b.order)
    .filter((category) => category.enabled);

  localStorage.setItem("categories", JSON.stringify(categories));

  return categories;
};

export const fetchProducts = async (categoryId, ...additionalConfig) => {
  const response = await api.request("/products", {
    method: "GET",
    ...additionalConfig,
  });
  return (
    response.data.filter(
      (product) => !categoryId || product.category === categoryId
    ) || []
  );
};
