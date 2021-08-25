import { CategorySection } from "./categorySection";
import { orderBy } from "lodash";

export const CategorySections = (categories) => {
  let sections = "";
  const categoriesSortedByOrder = orderBy(categories, ["order"], ["asc"]);
  categoriesSortedByOrder.forEach((category, index) => {
    if (category.order > 0) {
      sections += CategorySection(
        category.imageUrl,
        category.key,
        category.name,
        category.description,
        category.id
      );
    }
  });
  return sections;
};
