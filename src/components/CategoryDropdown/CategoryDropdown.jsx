import React from "react";
import "../CategoryDropdown/CategoryDropdown.scss";

const CategoryDropdown = ({ categories, handleCategoryClick }) => {
  const handleClick = (e) => {
    handleCategoryClick({ id: e.target.value });
  };
  return (
    <div className="categories-select-dropdown">
      <select onChange={handleClick}>
        <option value="all">Select an Category</option>
        {categories.map((category) =>
          category.enabled ? (
            <option value={category.id} key={category.key}>
              {category.name}
            </option>
          ) : null
        )}
      </select>
    </div>
  );
};

export default CategoryDropdown;
