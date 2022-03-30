import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeCategory from "../HomeCategory/HomeCategory";
import { useSelector } from "react-redux";

const Banners = (props) => {
  const { categoriesData } = useSelector((state) => state.apiData);

  const sortedCategories = categoriesData
    .filter((item) => item.imageUrl)
    .sort((a, b) => a.order - b.order);

  return (
    <HomePageCategoriesContainer>
      {sortedCategories.map((category, index) => (
        <HomeCategory category={category} key={category.id} index={index} />
      ))}
    </HomePageCategoriesContainer>
  );
};

const HomePageCategoriesContainer = styled.div`
  width: 800px;
  @media (max-width: 800px) {
    width: unset;
  }
`;


export default Banners;
