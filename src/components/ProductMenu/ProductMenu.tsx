import React from "react";
import { Link } from "react-router-dom";
import type { Category } from "../../types/customTypes";
import categories from "../../server/categories/index.get.json";
import "./ProductMenu.scss";

export const ProductMenu = () => {
  return (
    <div className="product-menu">
      { categories.map((category: Category) => {
        return <Link to={category.id} key={category.key}>{ category.name }</Link>;
      })}
    </div>
  )
}
