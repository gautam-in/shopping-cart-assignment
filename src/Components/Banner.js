import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchBanners } from "../redux/Banners/bannersactions";
import Eachbanner from "./Eachbanner.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import "./Banner.scss";
function Banner({ bannersData, fetchBanners }) {
  useEffect(() => {
    fetchBanners();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return bannersData.loading ? (
    <h2>Loading</h2>
  ) : bannersData.error ? (
    <h2>{bannersData.error}</h2>
  ) : (
    <div>
      {console.log(bannersData)}
      <Slider {...settings}>
        {bannersData &&
          bannersData.banners &&
          bannersData.banners.map((element, index) => (
            <div key={element.id}>
              <Eachbanner data={element} />
            </div>
          ))}
      </Slider>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    bannersData: state.banners,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBanners: () => dispatch(fetchBanners()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
