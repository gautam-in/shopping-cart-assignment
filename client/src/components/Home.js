import React from "react";
import Accordion from "./accordion/Accordion";
import { HomeCarousel } from "./carousel/HomeCarousel";
import Categories from "./categories/Categories";
// import { Header } from "./header/Header";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <Categories />
     <Accordion/>
    </>
  );
};

export default Home;
