import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeCategory from "../HomeCategory/HomeCategory";
import styled from "styled-components";

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

const HomePageCategoriesContainer = styled.div`
  width: 800px;
  @media (max-width: 800px) {
    width: unset;
  }
`;

export default Banners;
