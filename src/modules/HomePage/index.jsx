import React from "react";
import Carousal from "./Components/Carousal";
import Category from "./Components/Category";
import "./homePage.scss";

const HomePage = () => (
  <article className="homePage">
    <Carousal />
    <Category />
  </article>
);

export default HomePage;
