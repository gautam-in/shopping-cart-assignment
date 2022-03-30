import React, { useState } from "react";
import "./categories.styles.css";

const Categories = ({ categories, onClickCategoryHandler }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const changeCategoryHandler = (categoryId) => {
    const category = selectedCategory === categoryId ? "" : categoryId;

    onClickCategoryHandler(category);
    setSelectedCategory(category);
  };

  return (
    <div className="product-categories">
      <ul>
        {categories.length > 0 &&
          categories.map(({ name, id }) => (
            <li
              key={id}
              className={`category ${
                selectedCategory === id ? "active-category" : ""
              }`}
              onClick={() => changeCategoryHandler(id)}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
