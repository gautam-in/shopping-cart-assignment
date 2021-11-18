import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { useSelector } from "react-redux";
import "../styles/Carousel.scss";

export default function Carousel() {
  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  const banners = useSelector((state) => state.banner.banner);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: false,
    // fade: true,

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {},
    //   },
    // ],
  };
  return (
    <div className="slider">
      <button className="prev" onClick={previous}>
        Prev
      </button>
      <Slider ref={(c) => (slider.current = c)} {...settings}>
        {banners.length > 0 &&
          banners.map((banner) => (
            <div className="slider-image-container">
              <img
                key={banner.id}
                src={`http://127.0.0.1:5500/${banner.bannerImageUrl}`}
                alt=""
              />
            </div>
          ))}
      </Slider>
      <button className="next" onClick={next}>
        Next
      </button>
    </div>
  );
}