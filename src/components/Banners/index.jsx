import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeCategory from "../HomeCategory/HomeCategory";
import { HomePageCategoriesContainer } from "./banners.styles";

const Banners = (props) => {
  const [categories, setCategories] = useState([]);
  const sortedCategories = categories
    .filter((item) => item.imageUrl)
    .sort((a, b) => a.order - b.order);
  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await axios.get("http://localhost:3030/categories");
        setCategories(response.data);
      } catch (e) {
        console.error("Failed to fetch");
        console.error(e);
      }
    }
    fetchApi();
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
