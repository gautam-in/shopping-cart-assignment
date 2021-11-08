import React, { useContext } from "react";
import styled from "styled-components";
import style from "./products.module.css";
import { CategoryContext } from "../../../contexts/CategoryContext";

const CategoryStyle = styled.div`
  border-bottom: 1px solid darkgray;
  padding: 2% !important;
  font-weight: 600;
  color: gray;

  &:hover {
    background-color: gray;
    color: white;
  }
`;
const CategoryFilter = ({ category, categoryContextData }) => {
  const selectedCategory = useContext(CategoryContext);

  return (
    <>
      <CategoryStyle
        className={`${
          selectedCategory.category === category.id
            ? style.selectedCategory
            : ""
        } ${style.categorySection}`}
        onClick={() => categoryContextData.setCategory(category.id)}
      >
        <h5>{category.name}</h5>
      </CategoryStyle>
    </>
  );
};

export default CategoryFilter;
