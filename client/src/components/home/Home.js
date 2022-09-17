import React from "react";
import BannerCarousal from "../carousal/BannerCarousal";
import Categories from "../categories/Categories";
import useHttp from "../hooks/useHttp";
import styles from "./Home.module.scss"

const Home = () => {
  const { banners, categories } = useHttp();

  return (
    <div className={styles.bodyContainer}>
      {banners.length > 0 && <BannerCarousal banners={banners} />}
      {categories.length > 0 && <Categories categories={categories} />}
    </div>
  );
};

export default Home;
