import React from "react";
import "./Sidebar.css";
const Sidebar = ({ products, categories, getFilteredList }) => {
  return (
    <div className="sidebar">
      <ul className="sidebarList">
        {categories.map((category, index) => {
          return (
            <li
              onClick={() => getFilteredList(category.id)}
              key={category.key}
              className="sidebarListItem"
            >
              {category.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
