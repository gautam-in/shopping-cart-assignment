import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import useHttp from "../../utils/hooks/use-http";

const Banner = () => {
  const banners = useHttp("http://localhost:5000/banners");

  return (
    <Carousel
      showArrows
      autoPlay
      infiniteLoop
      interval={2000}
      showThumbs={false}
    >
      {banners.map((banner) => (
        <div key={banner.id}>
          <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
