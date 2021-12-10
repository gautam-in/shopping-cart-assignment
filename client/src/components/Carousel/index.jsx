import React from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
};
export default function Carousel({ children }) {
  return <Slider {...settings}>{children}</Slider>;
}
