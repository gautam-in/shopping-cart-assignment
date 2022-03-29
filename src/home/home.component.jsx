import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Category from "../component/category-item/category-item.component";
import allCategories from "../server/categories/index.get.json";
import bannerList from "../server/banners/index.get.json";
import "./home.styles.scss";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    //  Api call required to get categories data
    setCategories(allCategories);
  }, []);
  return (
    <div className="home-container">
      <div className="shadow bottom">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
        >
          {bannerList &&
            bannerList.map((item) => (
              <div key={`key=${item.id}`}>
                <img
                  src={process.env.PUBLIC_URL + item.bannerImageUrl}
                  alt={item.bannerImageAlt}
                />
              </div>
            ))}
        </Carousel>
      </div>
      {categories
        .filter((item) => item.order > 0)
        .sort((a, b) => a.order - b.order)
        .map((item) => (
          <Category key={item.id} category={item} />
        ))}
    </div>
  );
};
export default Home;
