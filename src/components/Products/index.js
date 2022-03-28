import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";
import Product from "../Product";

import classes from "./Products.module.css";
import { NavLink } from "react-router-dom";
const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [filteredProductsData, setFilteredProductsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [showDropDown, setShowDropdown] = useState(false);

  const match = useRouteMatch("/products/:id");

  useEffect(() => {
    const getProductsData = async () => {
      const { data: products } = await axios.get(
        "http://localhost:5000/products"
      );
      const { data: categories } = await axios.get(
        "http://localhost:5000/categories"
      );
      if (products) {
        setProductsData(products);
      }
      if (categories) {
        categories.sort((a, b) => a.order - b.order);
        setCategoriesData(categories.filter((category) => category.order > 0));
      }
    };
    getProductsData();
  }, []);

  useEffect(() => {
    console.log("useeffect 2 ran");
    if (match) {
      const filteredData = productsData.filter(
        (productData) => productData.category === match.params.id
      );
      setFilteredProductsData(filteredData);
    }
  }, [match, productsData]);

  return (
    <main className={classes["products-container"]}>
      <div
        className={classes["products-header"]}
        onClick={() => setShowDropdown((prevState) => !prevState)}
      >
        {currentCategory}
        <i className={classes["arrow-down"]}></i>
      </div>
      <nav
        className={`${classes["categories-nav"]} ${
          showDropDown ? classes["show-dropdown"] : ""
        }`}
      >
        <ul>
          {categoriesData.map((category) => {
            return (
              <li key={category.id}>
                <NavLink
                  onClick={() => {
                    setCurrentCategory(category.name);
                    setShowDropdown(false);
                  }}
                  activeClassName={classes["active"]}
                  to={`/products/${category.id}`}
                >
                  {category.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <section className={classes["products"]}>
        {!match
          ? productsData.map((productData) => (
              <Product productData={productData} key={productData.id} />
            ))
          : filteredProductsData.map((filteredPoductData) => (
              <Product
                productData={filteredPoductData}
                key={filteredPoductData.id}
              />
            ))}
      </section>
    </main>
  );
};
export default Products;
