import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductItem from "../../Components/product-item/product-item.component";

import useHttp from "../../utils/hooks/use-http";

import "./products.styles.css";

const Products = () => {
  const categories = useHttp("http://localhost:5000/categories");
  const allProducts = useHttp("http://localhost:5000/products");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const navigate = useNavigate();
  const { categoryId } = useParams();

  const dropdownHandler = (event) => {
    const { value } = event.target;
    navigate(`/products/${value}`);
  };

  useEffect(() => {
    if (categoryId !== undefined) {
      setSelectedProducts(
        allProducts.filter((product) => product.category === categoryId)
      );
    } else {
      setSelectedProducts(allProducts);
    }
  }, [categoryId, allProducts]);

  return (
    <div className='products'>
      <div className='categories-sidebar'>
        {categories
          .filter((category) => category.enabled)
          .map((category) => (
            <li
              key={category.id}
              onClick={() => navigate(`/products/${category.id}`)}
              className={`category-list-item ${
                category.id === categoryId ? "selected" : ""
              }`}
            >
              {category.name}
            </li>
          ))}
      </div>
      <select
        value={categoryId ? categoryId : "Default"}
        onChange={dropdownHandler}
        className='categories-dropdown'
      >
        <option value='Default' disabled>
          Select Category
        </option>
        {categories
          .filter((category) => category.enabled)
          .map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
      </select>
      <div className='product-container'>
        {selectedProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
