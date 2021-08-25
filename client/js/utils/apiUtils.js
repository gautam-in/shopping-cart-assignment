export const getCategories = async () => {
  const categoriesRes = await fetch("../../server/categories/index.get.json");
  const categories = await categoriesRes.json();
  return categories;
};

export const getBanners = async () => {
  const bannersRes = await fetch("../../server/banners/index.get.json");
  const banners = await bannersRes.json();
  return banners;
};

export const getProducts = async () => {
  const prodsRes = await fetch("../../server/products/index.get.json");
  const prods = await prodsRes.json();
  return prods;
};

export const getHomePageData = async () => {
  const banners = await getBanners();
  const categories = await getCategories();
  return { banners, categories };
};
