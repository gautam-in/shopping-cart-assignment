import React from "react";
import useHttp from "../hooks/useHttp";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import styles from "./Products.module.scss";

const Products = () => {
  const { products, categories } = useHttp();
  return (
    <div className={styles.productContainer}>
      <div className={styles.productsCategories}>
        {categories.length > 0 && (
          <CategoryList categories={categories} />
        )}
      </div>
      <div className={styles.productsList}>
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Products;
