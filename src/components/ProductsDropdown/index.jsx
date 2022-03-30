import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setProductsCategory } from "../../redux/products/products.action";

const ProductDropdown = () => {
  const dispatch = useDispatch();
  const { categoriesData } = useSelector((state) => state.apiData);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let finalCategories=categoriesData.sort((a,b)=>a.order-b.order)
    setCategories(finalCategories);
  }, [categoriesData]);

  return (
    <div>
      <CategorySelector
        onChange={(e) => dispatch(setProductsCategory(e.target.value))}
      >
        {categories.map((item) => {
          return <option value={item.id}>{item.name}</option>;
        })}
      </CategorySelector>
    </div>
  );
};

const CategorySelector = styled.select`
  width: 100vw;
  padding: 16px;
  display: none;
  color: #fff;
  background-color: #d00256;
  @media (max-width: 500px) {
    display: unset;
  }
`;

export default ProductDropdown;
