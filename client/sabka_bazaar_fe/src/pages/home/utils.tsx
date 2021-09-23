import { CategoryList } from "models/home";

export const getCategoryNames = (categoryData: CategoryList["categories"]) => {
  const categoryNames = categoryData.map((category) => {
    return category.name;
  });
  return categoryNames;
};
