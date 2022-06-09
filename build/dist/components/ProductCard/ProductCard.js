import React from "../../../_snowpack/pkg/react.js";
import {useViewport} from "../../hooks/useViewport.js";
import "./ProductCard.css.proxy.js";
export const ProductCard = ({product, cartDispatch}) => {
  const windowWidth = useViewport();
  const handleClick = (event) => {
    if (event.target.innerText.indexOf("Buy Now") != -1) {
      cartDispatch({type: "add-item", data: product});
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "product-card",
    onClick: handleClick
  }, /* @__PURE__ */ React.createElement("div", {
    className: "product-card__title"
  }, product.name), /* @__PURE__ */ React.createElement("div", {
    className: "product-card__image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: product.imageURL,
    alt: product.name
  })), /* @__PURE__ */ React.createElement("div", {
    className: "product-card__description"
  }, product.description), windowWidth > 992 ? /* @__PURE__ */ React.createElement("div", {
    className: "product-card__price-button-desktop"
  }, /* @__PURE__ */ React.createElement("div", null, "MRP. Rs ", product.price), /* @__PURE__ */ React.createElement("button", null, "Buy Now")) : /* @__PURE__ */ React.createElement("button", {
    className: "product-card__price-button-mobile"
  }, `Buy Now @ Rs. ${product.price}`));
};
export default ProductCard;
