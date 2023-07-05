import React from "react";
import CategoryCard from "../CategoryCard";

function Categories({ categories }) {
  return (
    <>
      {categories.map(({ id, key, name, imageUrl, description }, index) => (
        <CategoryCard
          id={id}
          key={id}
          slug={key}
          name={name}
          imageUrl={imageUrl}
          description={description}
        />
      ))}
    </>
  );
}

export default Categories;
