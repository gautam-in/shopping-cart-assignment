export const sortAndFilter = (categories) => {
  return categories
    .filter((category) => category.order > 0)
    .sort((a, b) => a.order - b.order);
};
