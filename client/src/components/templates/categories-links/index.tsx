import { NavLink } from "react-router-dom";

import { Flex } from "../../atoms";
import { type Category } from "../../molecules/category-card";

import "./category-links.scss";

type CategoryLinksProps = {
  categories: Category[];
};

export function CategoryLinks(props: CategoryLinksProps) {
  const { categories } = props;

  return (
    <Flex className="category-links" direction="col">
      <NavLink end to="/products" className="category-links__link">
        All
      </NavLink>
      {categories.map((category) => (
        <NavLink
          key={category.id}
          className="category-links__link"
          to={`/products/${category.key}`}
        >
          {category.name}
        </NavLink>
      ))}
    </Flex>
  );
}
