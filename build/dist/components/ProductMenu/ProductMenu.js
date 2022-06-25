import React from "../../../_snowpack/pkg/react.js";
import {NavLink} from "../../../_snowpack/pkg/react-router-dom.js";
import categories from "../../server/categories/index.get.json.proxy.js";
import "./ProductMenu.css.proxy.js";
export const ProductMenu = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "product-menu"
  }, categories.map((category) => {
    return /* @__PURE__ */ React.createElement(NavLink, {
      to: category.id,
      key: category.key,
      className: ({isActive}) => isActive ? "active-menu-link" : "inactive-menu-link"
    }, category.name);
  }));
};
export default ProductMenu;
