import React, { useState, useEffect } from "react";

import "./products.css";

import Product from "../components/Product";
import { NavLink, useParams } from "react-router-dom";

function Products() {
  let [productData, setProductData] = useState([]);
  let [filteredProducts, setFilteredProducts] = useState([]);

  let [categoriesData, setCategoriesData] = useState([]);

  let params = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((data) => data.json())
      .then((productdata) => {
        setProductData(productdata);
        if (params.productKey) {
          setFilteredProducts(
            productdata.filter((data) => data.category === params.productKey)
          );
        } else {
          setFilteredProducts(productdata);
        }
      });
  }, []);

  let filterProducts = (catId) => {
    setFilteredProducts(productData.filter((data) => data.category === catId));
  };

  let productList = filteredProducts.map((data) => {
    return (
      <Product
        pname={data.name}
        imageURL={data.imageURL}
        description={data.description}
        price={data.price}
        key={data.id}
      />
    );
  });

  let categoriesList = categoriesData.map((data) => {
    if (data.enabled)
      return (
        <NavLink
          onClick={() => filterProducts(data.id)}
          id={data.id}
          to={"/Products/" + data.id}
        >
          {data.name}
        </NavLink>
      );
  });

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((data) => data.json())
      .then((categoriesdata) => {
        setCategoriesData(categoriesdata);
      });
  }, []);

  return (
    <article className="productpage-container">
      <section className="menu-section">
        <nav>{categoriesList}</nav>
      </section>
      <section className="porduct-listing">{productList}</section>
    </article>
  );
}

export default Products;
