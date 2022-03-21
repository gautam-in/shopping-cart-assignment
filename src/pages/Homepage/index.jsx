import React from "react";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Offers from "../../components/Offers";
import Banners from "../../components/Banners";
import { HomepageContainer } from "./homepage.styles";
import { useSelector } from "react-redux";
import ErrorPage from "../../components/ErrorPage";

const Homepage = (props) => {
  const { error } = useSelector((state) => state.apiData);

  console.log(error);
  if (error) {
    return <ErrorPage />;
  }
  return (
    <HomepageContainer>
      <Offers />
      <Banners />
    </HomepageContainer>
  );
};

export default Homepage;