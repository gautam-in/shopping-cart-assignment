import React from "react";
import { useEffect, useState } from "react";
import Product from "../../components/Product";
import ProductsSidebar from "../../components/ProductsSidebar";
import { useDispatch, useSelector } from "react-redux";
import ProductDropdown from "../../components/ProductsDropDown";
import { fetchProducts } from "../../redux/fetchData/fetch.actions";
import styled from "styled-components";
import ErrorPage from "../../components/ErrorPage";

const Products = (props) => {
  const { productsData, error } = useSelector((state) => state.apiData);
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.products);
  const filteredData = productsData.filter(
    (item) => item.category === selectedCategory
  );
  let selectedData = selectedCategory ? filteredData : productsData;
  
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
        style={
          selectedData.length
            ? {
                display: "flex",
                flexDirection: "column",
              }
            : {
                display: "flex",
                justifyContent: "center",
                textAlign:"center",
                alignItems: "center",
                width: "100%",
              }
        }
      >
        <ProductDropdown />
        {selectedData.length ? (
          <ProductsContainer>
            {selectedData.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </ProductsContainer>
        ) : (
          <h1 style={{ width: "100%", alignItems: "center" }}>
            No Item Available Respect to This Category
          </h1>
        )}
      </div>
    </ProductsPageContainer>
  );
};

const ProductsPageContainer = styled.div`
  display: flex;
  margin: 0 10%;
  @media (max-width: 800px) {
    margin: 0;
  }
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 175px);
  gap: 32px;
  padding-left: 32px;
  @media (max-width: 800px) {
    padding: 16px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    display: unset;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SidebarContainer = styled.div`
  width: 200px;
`;

export default Products;
