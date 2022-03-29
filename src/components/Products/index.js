import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import Product from "../Product";

import classes from "./Products.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../../actions/fetchProductList";
import { fetchCategoryList } from "../../actions/fetchCategoryList";

const Products = () => {
  const [filteredProductsData, setFilteredProductsData] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [showDropDown, setShowDropdown] = useState(false);
  const [urlProductId, setUrlProductId] = useState(null);

  const match = useRouteMatch("/products/:id");
  const dispatch = useDispatch();
  const { productList, categoryList } = useSelector((state) => {
    return { productList: state.productList, categoryList: state.categoryList };
  });

  if (match) {
    if (match.params.id !== urlProductId) {
      setUrlProductId(match.params.id);
    }
  }

  useEffect(() => {
    dispatch(fetchProductList());
    dispatch(fetchCategoryList());
  }, [dispatch]);

  useEffect(() => {
    if (urlProductId) {
      const filteredData = productList.filter(
        (productData) => productData.category === urlProductId
      );
      setFilteredProductsData(filteredData);
    }
  }, [urlProductId, productList]);

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
          {categoryList.map((category) => {
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
          ? productList.map((productData) => (
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
