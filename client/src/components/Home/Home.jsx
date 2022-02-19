import React, { Fragment } from "react";
import "./home.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Category from "../Category/Category";
import { Container } from "@material-ui/core";

const Home = () => {
  const [bannerData, setBannerData] = useState(null);
  const [categoryData, setCategoryData] = useState(null);

  const getBanners = async () => {
    const result = await axios.get("http://localhost:5000/banners");
    if (result && result.status === 200) {
      setBannerData(result.data);
    }
  };

  const getCategories = async () => {
    const result = await axios.get("http://localhost:5000/categories");
    if (result && result.status === 200) {
      setCategoryData(result.data);
    }
  };

  useEffect(() => {
    getBanners();
    getCategories();
    localStorage.removeItem("categoryId");
  }, []);

  return (
    <Fragment>
      <Container>
      <div className="shadow bottom">
        
          <Carousel showThumbs={false}>
            {bannerData &&
              bannerData.map((item) => {
                return (
                  <div key={item.id}>
                    <img src={item.bannerImageUrl} alt={item.bannerImageAlt} />
                  </div>
                );
              })}
          </Carousel>
       
      </div>
      </Container>

      {categoryData &&
        categoryData
          .filter((item) => item.order > 0)
          .sort((a, b) => a.order - b.order)
          .map((item) => {
            return <Category key={item.id} categoryData={item} />;
          })}
    </Fragment>
  );
};

export default Home;
