import React from "react";
import { useEffect, useState } from "react";
import {
  ProductsPageContainer,
  ProductsContainer,
  SidebarContainer,
} from "./productspage.styles";
import Product from "../../components/Product";
import ProductsSidebar from "../../components/ProductsSidebar";
import { useDispatch, useSelector } from "react-redux";
import ProductDropdown from "../../components/ProductsDropDown";
import { fetchProducts } from "../../redux/fetchData/fetch.actions";
import ErrorPage from "../../components/ErrorPage";

const Products = (props) => {
  const { productsData, error } = useSelector((state) => state.apiData);
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.products);
  const filteredData = productsData.filter(
    (item) => item.category === selectedCategory
  );
  let selectedData = filteredData.length > 0 ? filteredData : productsData;
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  if (error) {
    return <ErrorPage />;
  }
  return (
    <ProductsPageContainer>
      <SidebarContainer>
        <ProductsSidebar />
      </SidebarContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ProductDropdown />
        <ProductsContainer>
          {selectedData.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ProductsContainer>
      </div>
    </ProductsPageContainer>
  );
};

export default Products;