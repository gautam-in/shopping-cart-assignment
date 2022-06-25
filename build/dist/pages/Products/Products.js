import React from "../../../_snowpack/pkg/react.js";
import {Outlet} from "../../../_snowpack/pkg/react-router-dom.js";
import {ProductMenu, ProductMenuMobile} from "../../components/index.js";
import {useViewport} from "../../hooks/useViewport.js";
import "./Products.css.proxy.js";
const Products = () => {
  const windowWidth = useViewport();
  return /* @__PURE__ */ React.createElement("div", {
    className: "products"
  }, windowWidth > 478 ? /* @__PURE__ */ React.createElement(ProductMenu, null) : /* @__PURE__ */ React.createElement(ProductMenuMobile, null), /* @__PURE__ */ React.createElement(Outlet, null));
};
export default Products;
