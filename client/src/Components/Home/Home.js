import React, { useEffect } from "react";
import Categories from "../Categories/Categories";
import Slider from "../Carousel/Slider";
import "./Home.scss";
import { connect } from "react-redux";
import { homeAction } from "../../_actions";

const Home = (props) => {

  useEffect(() => {
    props.getCategories();
    props.getBanners();
  }, []);

  const { banners, categories } = props;

  return (
    <main className="home-content">
      { banners.length ? <Slider slides={banners} /> : ""}
      { categories.length ? <Categories categoryList={categories} /> : ""}
    </main>
  );
};

const mapStateToProps = (state) => {
  const { banners, categories } = state.home;
  const bannerImages = banners.map(item => item.bannerImageUrl);
  return { banners: bannerImages, categories };
}

const mapDispatchToProps = {
  getCategories: homeAction.getCategories,
  getBanners: homeAction.getBanners
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
