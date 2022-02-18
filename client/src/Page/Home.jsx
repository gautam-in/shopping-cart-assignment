import React from "react";
import Slider from "../components/carousel/Slider";
import CategoryCard from "../components/category-card/category-card.component";
import Footer from "../components/footer/footer.component";

const Home = () => {
  return (
    <>
      <Slider />

      <CategoryCard />
      <Footer />
    </>
  );
};

export default Home;
