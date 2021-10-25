import React from "react";
import Carousel from "../UI/organisms/Home/Carousel";
import Category from "../UI/organisms/Home/Category";

const Home = () => {
  return (
    <div style={{ maxWidth: "1320px", margin: "auto" }}>
      <Carousel />
      <Category />
    </div>
  );
};
export default Home;
