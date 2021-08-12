import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ShowBanners.scss";
import { fetchBanners } from "../../redux/Banners/bannersactions";
import Banner from "../Banner/Banner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
export default function ShowBanners() {
  const banners = useSelector((state) => state.banners);
  const dispatch = useDispatch(fetchBanners());
  const displayBanners = () => dispatch(fetchBanners());
  useEffect(() => {
    displayBanners()
  }, []);
  const sliderConfig = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700
  };
  return banners.loading ? (
    <h2>Loading</h2>
  ) : banners.error ? (
    <h2>{banners.error}</h2>
  ) : (
    <div>
      <Slider {...sliderConfig} style={{overflowY:'hidden'}}>
        {banners &&
          banners.banners &&
          banners.banners.map((ele, i) => (
            <div key={ele.id}>
              <Banner data={ele}/>
            </div>
          ))}
      </Slider>
    </div>
  );
}
