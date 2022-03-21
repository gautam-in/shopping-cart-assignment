import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carousal({ offers }) {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
    >
      {offers &&
        offers.map((offer) => {
          return (
            <div key={offer.id}>
              <img
                src={`${process.env.PUBLIC_URL}${offer.bannerImageUrl}`}
                alt={offer.bannerImageAlt}
                key={offer.id}
              />
            </div>
          );
        })}
    </Carousel>
  );
}

export default Carousal;
