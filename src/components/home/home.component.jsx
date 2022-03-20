import React from "react";
import Banner from "../../components/banner/banner.component";
import CategoryCard from "../../components/categoryCard/categoryCard.component";
import "./home.styles.scss";

const Home = () => {
  return (
    <section>
      <Banner></Banner>
      <CategoryCard></CategoryCard>
    </section>
  );
};

export default Home;
