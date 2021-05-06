import React from "react";

import Header from "../../components/header";
import Carousel from "../../components/carousel";
import Categories from "../../components/Categories";

import "./index.scss";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <Carousel />
        <Categories />
      </div>
    </>
  );
};

export default Home;
