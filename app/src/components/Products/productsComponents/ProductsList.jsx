import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import styled from "styled-components";
import { CategoryContext } from "../../../contexts/CategoryContext";

const ProductListStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const NoProductsStyle = styled.div`
  position: relative;
  left: 40%;
`;
const ProductsList = (props) => {
  const [productsResp, setProductsResp] = useState([]);
  const [productsFilterList, setProductsFilterList] = useState([]);

  const categoryContextData = useContext(CategoryContext);

  useEffect(() => {
    axios("http://localhost:5000/products")
      .then((resp) => {
        setProductsResp(resp.data);
        setProductsFilterList(resp.data);
        // console.log("Products List",resp.data);
      })
      .catch((error) => console.log(error));

    return () => {
      categoryContextData.setCategory(null);
    };
  }, []);

  useEffect(() => {
    let productsFilterList = [...productsResp];
    if (categoryContextData.category) {
      productsFilterList = productsFilterList.filter(
        (f) => f.category === categoryContextData.category
      );
    }
    setProductsFilterList(productsFilterList);
  }, [categoryContextData, productsResp]);
  return (
    <ProductListStyle>
      {/*Flex box is used as a styled component */}
      {productsFilterList.length > 0 ? (
        productsFilterList.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })
      ) : (
        <NoProductsStyle>No Products Available</NoProductsStyle>
      )}
    </ProductListStyle>
  );
};

export default ProductsList;
