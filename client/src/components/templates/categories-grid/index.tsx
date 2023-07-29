import { Box } from "../../atoms";
import { type Category, CategoryCard } from "../../molecules/category-card";

import "./categories-grid.scss";

export type CategoriesGridProps = {
  categories: Category[];
};

export function CategoriesGrid(props: CategoriesGridProps) {
  const { categories } = props;

  return (
    <Box className="category-gird">
      {categories.map((category, index) => (
        <CategoryCard
          key={category.id}
          direction={index % 2 !== 0 ? "row" : "row-reverse"}
          category={category}
        />
      ))}
    </Box>
  );
}
