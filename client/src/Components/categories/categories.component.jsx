import React from "react";
import useHttp from "../../utils/hooks/use-http";
import CategoryItem from "./category-item/category-item.component";

const Categories = () => {
  const categories = useHttp("http://localhost:5000/categories");
  let leftFlag = true;
  return (
    <>
      {categories.map((category) => {
        if (category.enabled) {
          const value = leftFlag;
          leftFlag = !leftFlag;
          return (
            <CategoryItem left={value} key={category.id} category={category} />
          );
        }
        return null;
      })}
    </>
  );
};

export default Categories;
