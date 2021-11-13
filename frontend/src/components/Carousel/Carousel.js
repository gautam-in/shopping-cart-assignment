import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import axios from "axios";
import data from '../../server/banners/index.get.json'
export default function Carousel() {
  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

// const banners= axios.get(`http://localhost:5000/banners`).then(res=>console.log(res.data));
const banners= data.map((banner)=>banner)
  // console.log(banners);
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
              <img
                key={banner.id}
                src={banner.bannerImageUrl}
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