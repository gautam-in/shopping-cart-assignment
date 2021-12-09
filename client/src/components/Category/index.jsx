import React, { useContext } from "react";
import { CategoryListingContext } from "components/contexts/categoryListing";
import "./Category.scss";

export default function Category({ category }) {
  const value = useContext(CategoryListingContext);

  const { onClickCategory, selectedCategory } = value;
  return (
    <p
      onClick={() => onClickCategory(category.id)}
      className={`Category ${
        category.id === selectedCategory ? "selected" : ""
      }`}
    >
      {category.name}
    </p>
  );
}
