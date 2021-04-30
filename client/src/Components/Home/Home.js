import React, { useEffect, Suspense, lazy } from "react";
import "./Home.scss";
import { connect } from "react-redux";
import { homeAction } from "../../_actions";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
const LazySlider = lazy(() => import('../Carousel/Slider'));
const LazyCategory = lazy(() => import('../Categories/Categories'));

const Home = (props) => {

  useEffect(() => {
    props.getCategories();
    props.getBanners();
  }, []);

  const { banners, categories } = props;

  return (
    <>
      <Suspense fallback={<LoadingIndicator />}>
        {banners.length ? <LazySlider slides={banners} /> : ""}
      </Suspense>
      <main className="home-content">
        <Suspense fallback={<LoadingIndicator />}>
          {
            categories.length ? <LazyCategory categoryList={categories} /> : ""
          }
        </Suspense>
      </main>
    </>
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
