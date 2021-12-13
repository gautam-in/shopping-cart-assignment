import React from "react";
import Banner from "../../Components/banner/banner.component";
import Categories from "../../Components/categories/categories.component";
import "./home.styles.css";

const Home = () => {
  return (
    <div className='home-page'>
      <Banner />
      <Categories />
    </div>
  );
};

export default Home;
