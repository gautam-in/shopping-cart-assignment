import React from "react";
import CategoryItem from "../category-item/category-item";
import "./categories-list.styles.css";

const CategoriesList = ({ categories }) => {
  return (
    <>
      {categories.length > 0 &&
        categories.map(({ id, name, imageUrl, description, alignment }) => (
          <CategoryItem
            alignment={alignment}
            key={id}
            name={name}
            imageUrl={imageUrl}
            description={description}
          />
        ))}
    </>
  );
};

export default CategoriesList;
