import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import "./Carousel.scss";

export default function Carousel() {
  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  const banners = useSelector((state) => state.products.banners);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: false,
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
              <img key={banner.id} src={`${banner.bannerImageUrl}`} alt="" />
            </div>
          ))}
      </Slider>
      <button className="next" onClick={next}>
        Next
      </button>
    </div>
  );
}
