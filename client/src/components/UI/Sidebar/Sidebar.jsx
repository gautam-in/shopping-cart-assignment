import React from "react";
import "./Sidebar.scss";
export default function Sidebar(props) {
  const { categories, productCategory, setProductCategory } = props;
  return (
    <aside className="sidebar">
      {categories
        .sort((a, b) => {
          return a.order - b.order;
        })
        .map((category) => {
          return (
            <button
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
