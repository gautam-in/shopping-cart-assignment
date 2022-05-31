import React, { useEffect, useState, Suspense } from "react";

import "./Home.css";

//import Category from "../components/Category";
//import Carousel from "../components/Carousel";
import LoadingSpinner from "../components/LoadingSpinner";

const Carousel = React.lazy(() => import("../components/Carousel"));
const Category = React.lazy(() => import("../components/Category"));

function Home({ categoriesData, bannerData }) {
  // let [categoriesData, setCategoriesData] = useState([]);

  // useEffect(() => {
  //   console.log("categories");
  //   fetch("http://localhost:5000/categories")
  //     .then((data) => data.json())
  //     .then((categoriesdata) => {
  //       setCategoriesData(categoriesdata);
  //     });
  // }, []);
  let counter = 1;

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

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <article className="homepage-container">
        <Carousel bannerData={bannerData}></Carousel>

        {AllCategories}
      </article>
    </Suspense>
  );
}

export default Home;
