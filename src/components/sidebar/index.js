import React from "react";
import useDevice from "../../utils/customHooks/useDevices";

import "./index.scss";

const Sidebar = ({ categories, selectedCategory, onClick }) => {
  const { isMobile } = useDevice();
  return isMobile ? (
    <select className="select" onChange={(e) => onClick(e.target.value)}>
      {categories.length > 0 &&
        categories.map((singleCategory) => (
          <option key={singleCategory.id} value={singleCategory.id}>
            {singleCategory.name}
          </option>
        ))}
    </select>
  ) : (
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
              onClick={(e) => onClick(singleCategory.id)}
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
