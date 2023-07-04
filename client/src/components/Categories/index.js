import React, { useEffect, useState } from "react";
import { fetchCategories } from "../../api/products";
import CategoryCard from "../CategoryCard";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetchCategories({ signal: controller.signal }).then((categories) => {
      setCategories(categories);
    });

    return () => controller.abort();
  }, []);

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
