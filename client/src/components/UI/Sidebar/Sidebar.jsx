import React from "react";
import "./Sidebar.scss";
export default function Sidebar(props) {
  const { categories, productCategory, setProductCategory } = props;
  return (
    <aside className="sidebar" data-test="component-sidebar">
      {categories.map((category) => {
        return (
          <button
            data-test="sidebar-button"
            style={{
              backgroundColor:
                productCategory === category.id ? "lightgray" : "transparent",
            }}
            onClick={() =>
              setProductCategory((productCategory) => {
                if (productCategory && category.id === productCategory)
                  return null;
                return category.id;
              })
            }
            key={category.id}
          >
            {category.name}
          </button>
        );
      })}
    </aside>
  );
}
