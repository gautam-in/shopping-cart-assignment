import React from "react";
import "./home.scss";
import CarouselHome from "./CarouselHome";
import Categories from "./Categories";

function Home() {
  return (
    <main className="app-home">
      <CarouselHome />
      <Categories />
    </main>
  );
}

export default Home;
