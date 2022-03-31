import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { connect } from "react-redux";

import "./home.styles.scss";
import Category from "../component/category-item/category-item.component";
import { getBanner, getCategory } from "../api";

const Home = ({ getBanner, bannerList, categories, getCategory }) => {
  useEffect(() => {
    if (!categories?.length) getCategory(() => {});
    if (!bannerList?.length) getBanner().then(() => {});
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
          {Array.isArray(bannerList) &&
            bannerList.map((item) => (
              <div key={`key=${item.id}`}>
                <img src={`${item.bannerImageUrl}`} alt={item.bannerImageAlt} />
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

const mapStateToProps = (state) => ({
  bannerList: state?.others?.banners,
  categories: state?.categories,
});
const mapDispatchToProps = { getBanner, getCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
