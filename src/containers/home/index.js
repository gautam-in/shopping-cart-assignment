import React from "react";

import Header from "../../components/header";
import Carousel from "../../components/carousel";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <Carousel />
        <h1>HELLO THIS IS MY FIRST HOME_WEB_PAGE</h1>
      </div>
    </div>
  );
};

export default Home;
