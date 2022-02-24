import React from "react";
import "./dropdown.styles.scss";

const DropDown = ({ categoryData, productId, defaultSelected, ...props }) => {
  return (
    <select
      onChange={props.handleDropDownChange}
      className="category_dropdown_content"
      value={productId ? productId : "Default"}
    >
      <option value="Default">All</option>
      {categoryData.map((category) =>
        category.enabled ? (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ) : null
      )}
    </select>
  );
};

export default DropDown;
