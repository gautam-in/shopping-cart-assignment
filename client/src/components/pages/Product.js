import ProductList from "../UI/organisms/Product/ProductList";
import "../UI/organisms/Product/ProductList.scss";
import CategoryList from "../UI/organisms/Product/CategoryList";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Product = () => {
  const { search } = useLocation();

  const [filterId, setFilterId] = useState(null);
  const searchParams = new URLSearchParams(search);
  const categorySelected = searchParams.get("category");

  useEffect(() => {
    setFilterId(categorySelected);
  }, [categorySelected]);
  return (
    <div className="page-wrap">
      <div className="container">
        <div className="product-page-main">
          <div className="product-filter-wrap">
            <CategoryList filterId={filterId} />
          </div>
          <div className="product-page-list-wrap">
            <ProductList filterId={filterId} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
