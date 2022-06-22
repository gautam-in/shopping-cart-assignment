import React from "react";
import "../CategorySidebar/CategorySidebar.scss";

const CategorySidebar = ({ category, handleClick, active }) => {
  const { name, id } = category;
  return (
    <div
      className={`category-sidebar ${active ? "active" : null}`}
      onClick={() => handleClick(category)}
      key={id}
    >
      {name}
    </div>
  );
};

export default CategorySidebar;
