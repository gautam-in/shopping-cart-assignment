import React from "react";
import Button from "../../atoms/Button/Button";
import "./Sidebar.scss";

export default function Sidebar({ filteredCategory, handleProduct }) {
  return (
    <aside className="sidebar">
      {filteredCategory.map((category) => (
        <Button
          onClick={() => handleProduct(category.id)}
          key={category.id}
          className={"sidebar__button"}
        >
          {category.name}
        </Button>
      ))}
    </aside>
  );
}
