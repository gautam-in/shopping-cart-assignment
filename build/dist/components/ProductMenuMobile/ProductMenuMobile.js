import React, {useState} from "../../../_snowpack/pkg/react.js";
import {BiChevronDown, BiChevronUp} from "../../../_snowpack/pkg/react-icons/bi.js";
import {NavLink} from "../../../_snowpack/pkg/react-router-dom.js";
import categories from "../../server/categories/index.get.json.proxy.js";
import "./ProductMenuMobile.css.proxy.js";
export const ProductMenuMobile = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [selectedCategoryName, setSelectedCategoryName] = useState("All Products");
  const menuCategories = menuIsOpen ? "product-menu-mobile__categories show-menu" : "product-menu-mobile__categories hide-menu";
  const handleProductMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  const handleSelectedCategory = (categoryName) => {
    setSelectedCategoryName(categoryName);
    setMenuIsOpen(!menuIsOpen);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "product-menu-mobile"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "product-menu-mobile__head",
    onClick: handleProductMenu
  }, /* @__PURE__ */ React.createElement("span", null, selectedCategoryName), /* @__PURE__ */ React.createElement("span", null, menuIsOpen ? /* @__PURE__ */ React.createElement(BiChevronUp, {
    className: "arrow-icon"
  }) : /* @__PURE__ */ React.createElement(BiChevronDown, {
    className: "arrow-icon"
  }))), /* @__PURE__ */ React.createElement("main", {
    className: menuCategories
  }, categories.map((category) => {
    return /* @__PURE__ */ React.createElement(NavLink, {
      to: category.id,
      key: category.key,
      onClick: () => handleSelectedCategory(category.name),
      className: ({isActive}) => isActive ? "active-mobile-menu-link" : "inactive-mobile-menu-link"
    }, category.name);
  })));
};
export default ProductMenuMobile;
