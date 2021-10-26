import React from "react";
import "./category-dropdown.scss";

function CategoryDropdown(props) {
  return (
    <div className="CategoryDropdown">
      <select
        className="CategoryDropdown__select"
        onChange={props.optionSelected}
        value={props.seletcedCategory ? props.seletcedCategory : ""}
      >
        <option value="">All Products</option>
        {props.categoriesData.map((category) => {
          return (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default CategoryDropdown;