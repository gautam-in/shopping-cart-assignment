import React from "react";
import { useLocation } from "react-router-dom";

const Products = () => {
  const { state } = useLocation();
  const { categoryId } = state;
  return (
    <div>
      {categoryId}
      {/* <div className="sidebar">
        {categoryList &&
          categoryList
            .filter((item) => item.order > 0)
            .sort((a, b) => a.order - b.order)
            .map((item) => {
              return (
                <div
                  key={item.id}
                  className={`sidebar-item-name ${
                    filterId === item.id ? "sidebar-bold" : ""
                  }`}
                  onClick={() => filterDataHandler(item.id)}
                >
                  {item.name}
                </div>
              );
            })}
      </div> */}
    </div>
  );
};

export default Products;
