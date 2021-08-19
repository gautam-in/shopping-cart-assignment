import React, { useState } from "react";
import CategoryMenu from "./Components/CategoryMenu";
import ProductList from "./Components/ProductList";
import "./productListingPage.scss";

const ProductListingPage = ({ setCart }) => {
  const [activeCategory, setActiveCategory] = useState();
  return (
    <article className="productListingPage">
      <CategoryMenu
        className="categoryMenu"
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <ProductList
        className="productList"
        activeCategory={activeCategory}
        setCart={setCart}
      />
    </article>
  );
};

export default ProductListingPage;
