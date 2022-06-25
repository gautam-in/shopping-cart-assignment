import React from "../../../_snowpack/pkg/react.js";
import categories from "../../server/categories/index.get.json.proxy.js";
import "./Categories.css.proxy.js";
import {NavLink} from "../../../_snowpack/pkg/react-router-dom.js";
const createCategory = (category, index) => {
  return /* @__PURE__ */ React.createElement("div", {
    key: category.id,
    className: "category",
    style: index % 2 === 0 ? {flexDirection: "row-reverse"} : {flexDirection: "row"}
  }, /* @__PURE__ */ React.createElement("div", {
    className: "category__image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: category.imageUrl,
    alt: category.name
  })), /* @__PURE__ */ React.createElement("div", {
    className: "category__details"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "category__title"
  }, category.name), /* @__PURE__ */ React.createElement("div", {
    className: "category__desc"
  }, category.description), /* @__PURE__ */ React.createElement(NavLink, {
    to: "products/" + category.id
  }, "Explore ", category.name)));
};
export const Categories = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "categories"
  }, categories.map((category, index) => {
    return createCategory(category, index);
  }));
};
export default Categories;
