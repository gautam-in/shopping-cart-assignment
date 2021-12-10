import React from "react";
import Category from "components/Category";
import "./CategoryListingSideBar.scss";

export default function CategoryListingSideBar({ categories }) {
  return (
    <div className="CategoryListingSideBar">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
}
