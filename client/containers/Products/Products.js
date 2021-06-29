import React, { useState, useEffect } from "react";
import { PRODUCTS_URL, CATEGORIES_URL } from "../../constants";
import "./Products.scss";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

const Products = () => {
  let [products, setProducts] = useState(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);
  let [categories, setCategories] = useState(null);
  let [selectedCategoryId, setSelectedCategoryId] = useState(
    window.location.hash.substring(1)
  );

  useEffect(() => {
    fetch(PRODUCTS_URL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(CATEGORIES_URL)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategoryId(category);
    window.location.hash = category;
  };

  const filteredProducts =
    selectedCategoryId && products
      ? products.filter((product) => product.category == selectedCategoryId)
      : products;

  return (
    <div className="products">
      {loading ? (
        <div className="no-content">Loading...</div>
      ) : error ? (
        <div className="no-content">Some error occured!</div>
      ) : (
        <>
          <ul className="product-categories">
            {categories &&
              categories.map((category) => (
                <li
                  className={
                    selectedCategoryId == category.id ? "category-active" : ""
                  }
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                </li>
              ))}
          </ul>

          <div className="product-list">
            {filteredProducts.length > 0 ? (
              products &&
              filteredProducts.map((prod) => (
                <ProductDetails product={prod} key={prod.id} />
              ))
            ) : (
              <div>Currently unavailable</div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
