import React from "react";
import { NavLink } from "react-router-dom";
import type { Category } from "../../types/customTypes";
import categories from "../../server/categories/index.get.json";
import "./ProductMenu.scss";

export const ProductMenu = () => {
  return (
    <div className="product-menu">
      { categories.map((category: Category) => {
        return <NavLink to={category.id} key={category.key} className={ ({ isActive }) => isActive ? "active-menu-link" : "inactive-menu-link" }>{ category.name }</NavLink>;
      })}
    </div>
  )
}
