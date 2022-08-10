import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchProductsAction } from "../../Action";
import { store } from "../../store";
import Product from "./Product";
import { useParams } from "react-router-dom";
import CategoriesNav from "../CategoriesNav/CategoriesNav";
import {
  ProductsPage,
  ProductsSection,
  CategoriesLeft,
} from "./Products.style";
import "./Products.style.scss";

const productsStore = (state) => state.products.map((product) => product);

function Products() {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [openCategories, setOpenCategories] = useState(false);
  // const [categoriesEle, setcategoriesEle] = useState([]);
  const ProductsSelect = useSelector(productsStore);
  useEffect(() => {
    store.dispatch(fetchProductsAction());
  }, []);
  useEffect(() => {
    if (params.id) {
      const getCat = ProductsSelect.filter(
        (product) => params.id === product.category
      ).map((product) => {
        return <Product key={product.id} product={product} />;
      });
      setProducts(getCat);
    } else {
      const getCat = ProductsSelect.map((product) => (
        <Product key={product.id} product={product} />
      ));
      setProducts(getCat);
    }
  }, [ProductsSelect, params]);
  const toggleCategories = () => {
    setOpenCategories(!openCategories);
  };
  return (
    <ProductsPage>
      <div className="container">
        <div className="products-page">
          <ProductsSection className="products-sections">
            <CategoriesLeft
              className={"product-categories " + (openCategories ? "open" : "")}
            >
              <div className="categories-toggle" onClick={toggleCategories}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <CategoriesNav />
            </CategoriesLeft>
            <div
              className={
                "d-flex flex-wrap product-list" +
                (products.length !== 0 ? "" : " no-products")
              }
            >
              {" "}
              {products.length !== 0 ? (
                products
              ) : (
                <div className="no-products-sec">
                  <span>No products in this category.</span>
                </div>
              )}{" "}
            </div>
          </ProductsSection>
        </div>
      </div>
    </ProductsPage>
  );
}

export default Products;
