import React, { useEffect, useState } from "react";

import "./Home.css";

import Category from "../components/Category";
import Carousel from "../components/Carousel";

function Home() {
  let [bannerData, setBannerData] = useState([]);
  let [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/banners")
      .then((data) => data.json())
      .then((bannerdata) => {
        setBannerData(bannerdata);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((data) => data.json())
      .then((categoriesdata) => {
        setCategoriesData(categoriesdata);
      });
  }, []);

  let AllCategories = categoriesData.map((cat) => {
    if (cat.enabled)
      return (
        <Category
          categoryname={cat.name}
          description={cat.description}
          imageUrl={cat.imageUrl}
          keyname={cat.key}
          id={cat.id}
          key={cat.id}
        />
      );
  });

  return (
    <article className="homepage-container">
      <section className="banners">
        <img
          src={bannerData[4]?.bannerImageUrl}
          alt={bannerData[4]?.bannerImageAlt}
        />
      </section>
      {/* <Carousel /> */}

      {AllCategories}
    </article>
  );
}

export default Home;
