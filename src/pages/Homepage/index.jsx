import React from "react";
import { useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Offers from "../../components/Offers";
import Banners from "../../components/Banners";
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

const HomepageContainer = styled.div`
  margin: 0 auto;
  width: 800px;
  @media (max-width: 800px) {
    width: unset;
  }
`;

export default Homepage;
