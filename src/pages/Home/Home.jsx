import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Home/Home.scss";
import Button from "../../components/Button/Button";

const Home = () => {
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      const fetchBanner = await axios.get("/banners");
      const bannerList = await fetchBanner.data;
      setBanners(bannerList);
      const fetchCategory = await axios.get("/categories");
      const categoryList = await fetchCategory.data;
      setCategories(categoryList);
    })();
  }, []);
  return (
    <div className="homePage-container">
      <div className="homePage-carousel-container">
        <div className="homePage-carousel">
          <Carousel
            style={{ marginTop: "20px" }}
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            centerMode={true}
            centerSlidePercentage={100}
          >
            {banners.map((banner) => {
              return (
                <div id={banner.id} key={banner.id}>
                  <img
                    src={banner.bannerImageUrl}
                    alt={banner.bannerImageAlt}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div class="faded-border"></div>
      <div className="homePage-categories-container">
        {categories.map((category) => {
          return category?.enabled ? (
            <div
              className="homePage-category-container faded-border"
              key={category.key}
            >
              <div className="homePage-category-image-box">
                <img
                  className="homePage-category-image"
                  src={category.imageUrl}
                  alt="Category"
                />
              </div>
              <div className="homePage-category-content-box">
                <div className="category-content-heading">{category.name}</div>
                <div className="category-contnent-description">
                  {category.description}
                </div>
                <div className="category-contnent-button">
                  <Button type="xl" onClick={null}>
                    Explore {category.key}
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
};

export default Home;
