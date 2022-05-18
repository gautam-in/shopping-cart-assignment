import React from "react";
import Slider from "react-slick";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { setBannerData } from "../store/banner/banner.action";
import { selectBannerData } from "../store/banner/banner.selector";
import { fetchBannerData } from "../utils/server/server.util";
import "./Banner.scss";

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#D3D3D3",
        margin: "2px",
      }}
      onClick={onClick}
    />
  );
}

const Banner = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getBannerData = async () => {
      const bannerData = await fetchBannerData();
      dispatch(setBannerData(bannerData));
    };
    getBannerData();
  }, []);

  const bannerItems = useSelector(selectBannerData);
  //console.log(bannerItems);

  var sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        },
      },
    ],
  };

  return (
    <section className="banner">
      <Slider {...sliderSettings}>
        {bannerItems.map((bannerItem) => (
          <div key={bannerItem.id} className="bannerItem">
            <img
              src={bannerItem.bannerImageUrl}
              alt={bannerItem.bannerImageAlt}
              className="bannerImage"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Banner;
