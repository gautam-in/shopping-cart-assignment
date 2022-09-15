import React from "react";
import BannerCarousal from "../carousal/BannerCarousal";
import Categories from "../categories/Categories";
import useHttp from "../hooks/useHttp";

const Home = () => {
  const { banners, categories } = useHttp();

  console.log(banners, "bannersss");
  console.log(categories, "categories");

  return (
    <div>
      {banners.length > 0 && <BannerCarousal banners={banners} />}
      {categories.length > 0 && <Categories categories={categories} />}
    </div>
  );
};

export default Home;
