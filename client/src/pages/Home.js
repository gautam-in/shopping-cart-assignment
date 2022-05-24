import React, { useEffect, useState } from "react";

import "./Home.css";

import Category from "../components/Category";
import Carousel from "../components/Carousel";

function Home() {
  let [bannerData, setBannerData] = useState([]);
  let [categoriesData, setCategoriesData] = useState([]);
  let [bannerImage, setBannerImage] = useState([]);
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

  let intervel;
  let counter = 0;

  let setCounter = (ind) => {
    console.log(ind);
    counter = ind;
  };

  useEffect(() => {
    intervel = setInterval(() => {
      setBannerImage([
        bannerData[counter % 5]?.bannerImageUrl,
        bannerData[counter++ % 5]?.bannerImageAlt,
      ]);
    }, 2000);

    return () => clearInterval(intervel);
  }, [bannerData]);

  let AllCategories = categoriesData.map((cat) => {
    if (cat.enabled)
      return (
        <Category
          categoryname={cat.name}
          description={cat.description}
          imageUrl={cat.imageUrl}
          keyname={cat.key}
          id={cat.id}
          counter={++counter}
          key={cat.id}
        />
      );
  });

  let imageMover = bannerData.map((ban, index) => {
    // if (cat.enabled)
    return (
      <span index={index} key={ban.id}>
        &#8226;
      </span>
    );
  });

  return (
    <article className="homepage-container">
      <section className="banners">
        <img src={bannerImage[0]} alt={bannerImage[1]} />
        <div>{imageMover}</div>
      </section>

      {AllCategories}
    </article>
  );
}

export default Home;
