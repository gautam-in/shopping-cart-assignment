import React from "react";
import "./index.scss";

const Sidebar = ({ categories, selectedCategory, onClick }) => {
  return (
    <ul className="sidebar">
      {categories.length > 0 &&
        categories.map((singleCategory, index) => (
          <li
            className={`nav_link_container item_${index}`}
            key={singleCategory.id}
          >
            <a
              className={`nav_link ${
                Object.keys(selectedCategory).length &&
                singleCategory.id === selectedCategory
                  ? "active"
                  : ""
              } ${singleCategory.key}`}
              onClick={onClick}
              id={singleCategory.id}
            >
              {singleCategory.name}
            </a>
          </li>
        ))}
    </ul>
  );
};

export default Sidebar;
