import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, updateCategory } from "../../../store/entities/items";
import "./categoriesSection.scss";

function CategoriesSection() {
  const dispatch = useDispatch();

  const categories = useSelector(getCategories);

  return (
    <div className="categoriesContainer">
      {categories.map((cat, index) => (
        <div
          className="eachCategory "
          key={cat?.id}
          onClick={() => dispatch(updateCategory(cat.id))}
        >
          {cat?.name}
        </div>
      ))}
    </div>
  );
}

export default CategoriesSection;
