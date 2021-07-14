import React from "react";
import { Link } from "react-router-dom";
import { useViewport } from "../../hooks/useDevice";

import "./style.scss";

const Sidebar = ({ categories, changeHandler, selectedCategory }) => {
  const { isMobile } = useViewport();
  return (
    <aside className="sidebar">
      {!isMobile
        ? categories.map((category) => (
            <Link
              aria-label={`Apply filter - show only ${category.name} products`}
              className={`${
                selectedCategory === category.id ? "selected" : ""
              }`}
              key={category.id}
              onClick={()=>changeHandler(category.id)}
              role="button"
              to={
                selectedCategory !== category.id
                  ? `/products/${category.id}`
                  : `/products/`
              }
              tabIndex={0}
            >
              {category.name}
            </Link>
          ))
        : null}
    </aside>
  );
};

export default Sidebar;
