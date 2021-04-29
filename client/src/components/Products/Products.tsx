import React, { useState } from "react";
import styles from "./Products.module.scss";
import ProductList from "./components/ProductList/ProductList";
import ProductItems from "./components/ProductItems/ProductItems";

const Products: any = () => {
  const [categoryId, setCategoryId] = useState(null);

  const handleNavigation = (id: any) => {
    setCategoryId(id);
  };
  return (
    <section className="disp-flex">
      <ProductList
        filterData={categoryId}
        handleNavigation={handleNavigation}
      />
      <ProductItems filterData={categoryId} />
    </section>
  );
};

export default Products;
