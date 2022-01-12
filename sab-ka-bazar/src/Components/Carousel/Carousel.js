import React, { useReducer, useContext } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeroContainer, HeroImage, HeroSection } from "./CarouselElements";
import { CartContext } from "../Context/CartContext";

const Carousel = () => {
  const {
    state: { banners },
  } = useContext(CartContext);

  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const sortedArray = banners.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    } else if (a.order > b.order) return 1;
    else return 0;
  });

  return (
    <HeroContainer>
      <Slider {...settings}>
        {sortedArray.map((item) => (
          <HeroSection key={item.id}>
            <HeroImage alt={item.bannerImageAlt} src={item.bannerImageUrl} />
          </HeroSection>
        ))}
      </Slider>
    </HeroContainer>
  );
};

export default Carousel;
