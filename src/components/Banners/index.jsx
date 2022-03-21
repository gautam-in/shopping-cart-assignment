import React, { useEffect, useState } from "react";
import HomeCategory from "../HomeCategory/HomeCategory";
import { HomePageCategoriesContainer } from "./banners.styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/fetchData/fetch.actions";

const Banners = (props) => {
  const { categoriesData } = useSelector((state) => state.apiData);
  const dispatch = useDispatch();

  const sortedCategories = categoriesData
    .filter((item) => item.imageUrl)
    .sort((a, b) => a.order - b.order);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <HomePageCategoriesContainer>
      {sortedCategories.map((category, index) => (
        <HomeCategory category={category} key={category.id} index={index} />
      ))}
    </HomePageCategoriesContainer>
  );
};

export default Banners;