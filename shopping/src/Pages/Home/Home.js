import React from "react";
import Banner from "../../component/Banner/Banner";
import CategoryList from "../../component/CategoryList/CategoryList";

const Home = () => {
  return (
    <div className="container-width">
      <Banner></Banner>
      <CategoryList></CategoryList>
    </div>
  );
};

export default Home;
