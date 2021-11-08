import React from "react";
import Categories from "./productsComponents/Categories";
import ProductsList from "./productsComponents/ProductsList";
import styled from "styled-components";
import style from "./productsComponents/products.module.css";

const CategoryStyle = styled.div`
  background-color: rgb(238, 237, 237);
  width: 20%;
  height: 100%;
  vertical-align: top;
`;
const ProductStyle = styled.div`
  width: 80%;
  background-color: white;

  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Products = (props) => {
  return (
    <>
      <div className={style.mainProductContainer}>
        <CategoryStyle>
          <Categories />
        </CategoryStyle>

        <ProductStyle>
          <ProductsList />
        </ProductStyle>
      </div>
    </>
  );
};

export default Products;
