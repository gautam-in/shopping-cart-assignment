import React from "../../../_snowpack/pkg/react.js";
import {useParams} from "../../../_snowpack/pkg/react-router-dom.js";
import {ProductCard} from "../index.js";
import products from "../../server/products/index.get.json.proxy.js";
import "./ProductGrid.css.proxy.js";
export const ProductGrid = ({cartDispatch}) => {
  const params = useParams();
  const {id} = params;
  const getProductCard = (product) => {
    return /* @__PURE__ */ React.createElement(ProductCard, {
      key: product.id,
      product,
      cartDispatch
    });
  };
  const getAllProducts = () => {
    return products.map((product) => getProductCard(product));
  };
  const getProductsByCategory = () => {
    const productsByCategory = products.filter((product) => product.category === id).map((product) => getProductCard(product));
    if (productsByCategory.length === 0) {
      return /* @__PURE__ */ React.createElement("p", {
        className: "no-products"
      }, "Sorry No Products available right now");
    }
    return productsByCategory;
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "product-grid"
  }, id === void 0 ? getAllProducts() : getProductsByCategory());
};
export default ProductGrid;
