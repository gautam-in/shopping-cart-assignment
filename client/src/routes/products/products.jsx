import React, { useEffect, useState } from "react";
import axios from "axios";
import "./products.styles.css";
import ProductList from "../../components/products-list/products-list";
import { BASE_URL } from "../../utilities/constants";
import Categories from "../../components/categories/categories";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState({
    allProducts: [],
    filteredProducts: [],
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(BASE_URL + "products");
        if (response.status === 200) {
          setProducts({
            allProducts: response.data,
            filteredProducts: response.data,
          });
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    getProducts();
  }, []);

  const onClickCategoryHandler = (categoryId) => {
    if (categoryId) {
      const filtered = products.allProducts.filter(
        ({ category }) => category === categoryId
      );

      setProducts({
        ...products,
        filteredProducts: filtered,
      });
    } else {
      setProducts({
        ...products,
        filteredProducts: products.allProducts,
      });
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(BASE_URL + "categories");
        if (response.status === 200) {
          const filteredCategories = response.data
            .filter((category) => category.enabled)
            .sort((a, b) => (a.order > b.order ? 1 : -1));
          setCategories(filteredCategories);
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    getCategories();
  }, []);

  return (
    <div className="products-container">
      <Categories
        categories={categories}
        onClickCategoryHandler={onClickCategoryHandler}
      />
      <ProductList products={products.filteredProducts} />
    </div>
  );
};

export default Products;
