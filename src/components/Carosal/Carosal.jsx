import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Carosal.scss";

const Carosal = ({ banners }) => {
  return (
    <div className="carousel-container">
      <div className="carousel-box">
        <Carousel
          className="carosal"
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          centerMode={true}
          centerSlidePercentage={100}
        >
          {banners.map((banner) => {
            return (
              <div id={banner.id} key={banner.id}>
                <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Carosal;
