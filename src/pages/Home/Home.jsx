import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Home/Home.scss";
import Carosal from "../../components/Carosal/Carosal";
import Banner from "../../components/Banner/Banner";

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
      <Carosal banners={banners} />
      <div className="homePage-categories-container">
        {categories.map((category) => {
          return category?.enabled ? (
            <Banner key={category.id} category={category} />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Home;
