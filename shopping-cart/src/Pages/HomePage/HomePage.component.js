import React from "react";
import { HomeContainer } from "./HomePage.styles.js";

import Categories from "../../Components/Categories/Categories.component.jsx";
import SliderContainer from "../../Components/SliderContainer/SliderContainer.component.jsx";

const HomePage = () => {
  return (
    <HomeContainer>
      <SliderContainer />
      <Categories />
    </HomeContainer>
  );
};

export default HomePage;
