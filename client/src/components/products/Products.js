import React, { useState } from "react";
import useHttp from "../hooks/useHttp";
import CategoryList from "./CategoryList";
import DropDown from "./DropDown";
import ProductList from "./ProductList";
import styles from "./Products.module.scss";

const Products = () => {
  document.title = "Products"
  const { products, categories } = useHttp();
  const [showFilterProducts, setShowFilterProducts] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleProducts = (id) => {
    if (id === selectedCategory) {
      setShowFilterProducts(false);
    } else {
      setShowFilterProducts(true);
      const result = products.filter((item) => item.category === id);
      setFilterProducts(result);
      setSelectedCategory(id);
    }
  };

  return (
    <div className={styles.productContainer}>
      <div className={styles.productsCategories}>
        {categories.length > 0 && (
          <CategoryList
          showFilterProducts={showFilterProducts}
          selectedCategory={selectedCategory}
            handleProducts={handleProducts}
            categories={categories}
          />
        )}
      </div>
      <div className={styles.dropDwnList}>
        {categories.length > 0 && <DropDown handleProducts={handleProducts} categories={categories} />}
      </div>
      <div className={styles.productsList}>
        <ProductList
          products={showFilterProducts ? filterProducts : products}
        />
      </div>
    </div>
  );
};

export default Products;
