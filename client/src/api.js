const errorMessage = ({ status, statusText }) => ({
  error: true,
  status,
  statusText,
});

export const getBanners = async () => {
  const res = await fetch(import.meta.env.VITE_BASE_URL + "/banners");
  if (!res.ok) return errorMessage(res);
  return await res.json();
};

export const getCategories = async () => {
  const res = await fetch(import.meta.env.VITE_BASE_URL + "/categories");
  if (!res.ok) return errorMessage(res);
  return await res.json();
};

export const getProducts = async () => {
  const res = await fetch(import.meta.env.VITE_BASE_URL + "/products");
  if (!res.ok) return errorMessage(res);
  return await res.json();
};
