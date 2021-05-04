import React from "react";

import Carousel from "../../components/carousel";
import Categories from "../../components/Categories";

import "./index.scss";

const Home = () => {
  return (
    <div className="container-fluid">
      <Carousel />
      <Categories />
    </div>
  );
};

export default Home;
