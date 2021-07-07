import React, { useState, useEffect } from "react";
import "./Products.scss";
import { useSelector, useDispatch } from "react-redux";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { fetchProducts } from "../../redux/products/productActions";
import { fetchCategories } from "../../redux/categories/categoryActions";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const categories = useSelector((state) => state.categories.data);
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    window.location.hash.substring(1)
  );

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
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
          <select
            value={selectedCategoryId}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="category-dropdown"
          >
            <option value="" disabled>
              ---Select Category---
            </option>
            {categories &&
              categories.map((_) => (
                <option value={_.id} key={_.id}>
                  {_.name}
                </option>
              ))}
          </select>
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
