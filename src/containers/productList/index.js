import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../../components/header";
import FetchData from "../../components/common/fetch-data";
import Sidebar from "../../components/sidebar";
import Product from "../../components/product";

import "./index.scss";

import label from "./data/index.json";

const ProductList = () => {
  const location = useLocation;
  const {
    urls: { getCategoryApi, getProductApi },
  } = label.services;

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category) {
      setSelectedCategory(category);
    }
  }, [location.pathname]);

  useEffect(() => {
    FetchData(getCategoryApi)
      .then((res) => {
        const categoryList = res
          .sort((a, b) => a.order - b.order)
          .filter((value) => {
            return value.order !== -1;
          });
        setCategories(categoryList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    FetchData(getProductApi)
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (e) => {
    const id = e.target.id;
    setSelectedCategory(id);
  };

  const handleCart = () => {};

  return (
    <>
      <Header />
      <div className="product_list_container container-fluid">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onClick={handleClick}
        />
        <div className="products">
          {products &&
            products.length > 0 &&
            products
              .filter((singleProduct) =>
                Object.keys(selectedCategory).length
                  ? singleProduct.category === selectedCategory
                  : true
              )
              .map((product) => (
                <Product
                  product={product}
                  key={product.id}
                  handlecart={handleCart}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
