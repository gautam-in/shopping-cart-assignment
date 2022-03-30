import React from "react";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Offers from "../../components/Offers";
import Banners from "../../components/Banners";
import { HomepageContainer } from "./homepage.styles";

const Homepage = (props) => {
  return (
    <HomepageContainer>
      <Offers />
      <Banners />
    </HomepageContainer>
  );
};

export default Homepage;
