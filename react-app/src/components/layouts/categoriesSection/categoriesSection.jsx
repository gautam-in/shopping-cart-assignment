import React from "react";
import { useSelector } from "react-redux";
import { getCategories } from "../../../store/entities/items";
import "./categoriesSection.scss";

function CategoriesSection() {
  const categories = useSelector(getCategories);

  return (
    <div className="categoriesContainer">
      {categories.map((cat, index) => (
        <div className="eachCategory" key={cat?.id}>
          {cat?.name}
        </div>
      ))}
    </div>
  );
}

export default CategoriesSection;
