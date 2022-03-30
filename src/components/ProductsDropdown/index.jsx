import React from "react";
import { PRODUCT_ID_MAP } from "../../utils/products.util";
import { useDispatch } from "react-redux";
import { setProductsCategory } from "../../redux/products/products.action";
import styled from "styled-components";

const ProductDropdown = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <CategorySelector
        onChange={(e) => dispatch(setProductsCategory(e.target.value))}
      >
        {Object.entries(PRODUCT_ID_MAP).map((item) => {
          return <option value={item[1]}>{item[0]}</option>;
        })}
      </CategorySelector>
    </div>
  );
};


const CategorySelector = styled.select`
  padding: 16px;
  display: none;
  color: #fff;
  width: 100vw;
  background-color: #d00256;
  @media (max-width: 500px) {
    display: unset;
  }
`;


export default ProductDropdown;
