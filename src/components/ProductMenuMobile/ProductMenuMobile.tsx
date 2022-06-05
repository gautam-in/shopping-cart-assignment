import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import type { Category } from "../../types/customTypes";
import categories from "../../server/categories/index.get.json";
import "./ProductMenuMobile.scss";

export const ProductMenuMobile = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [selectedCategoryName, setSelectedCategoryName] = useState("All Products");

  const menuCategories = menuIsOpen ? 'product-menu-mobile__categories show-menu' : 'product-menu-mobile__categories hide-menu';

  const handleProductMenu = () => {
      setMenuIsOpen(!menuIsOpen);
  }

  const handleSelectedCategory = (categoryName: string) => {
    setSelectedCategoryName(categoryName);
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <div className="product-menu-mobile">
      <header className="product-menu-mobile__head" onClick={handleProductMenu}>
        <span>{selectedCategoryName}</span>
        <span>{menuIsOpen ? <BiChevronUp className="arrow-icon"/> : <BiChevronDown className="arrow-icon"/>}</span>
      </header>

      <main className={menuCategories}>
      { categories.map((category: Category) => {
        return <NavLink
                to={category.id} 
                key={category.key} 
                onClick={() => handleSelectedCategory(category.name)} 
                className={ ({ isActive }) => isActive ? "active-mobile-menu-link" : "inactive-mobile-menu-link" }>
                    { category.name }
               </NavLink>;
      })}
      </main>
    </div>
  )
}
