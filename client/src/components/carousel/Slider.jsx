import React, { useEffect, useState } from "react";
import { getAllBanners } from "../../http";
import CarouselItem from "./carousel-item/carousel-item.component";
import Carousel from "./carousel.component";
const Slider = () => {
  const [banners, setBanners] = useState([{}]);
  useEffect(() => {
    const getBanners = async () => {
      try {
        const { data } = await getAllBanners();
        setBanners(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBanners();
  }, []);
  return (
    <Carousel>
      {banners.map((banner, index) => (
        <CarouselItem key={index}>
          <img
            key={banner.id}
            src={banner.bannerImageUrl}
            alt={banner.bannerImageAlt}
          />
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default Slider;
