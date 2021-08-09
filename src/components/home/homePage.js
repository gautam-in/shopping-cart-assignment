import React from "react";
import Categories from "./categories/categories";
import Banner from "./banner/banners";

const Home = (props) => {
  console.log(props);
  return (
    <div>
      <Banner />

      <Categories />
    </div>
  );
};

export default Home;
