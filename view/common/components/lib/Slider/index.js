// import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Slider({ data }) {
  return (
    <div style={{ paddingTop: `10px`, paddingBottom: `10px` }}>
      <Carousel
        showStatus={false}
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        showArrows={true}
        showThumbs={false}
      >
        {data
          ? data.map(({ bannerImageUrl, bannerImageAlt, isActive, id }) => {
              return (
                <div key={id}>
                  <img src={bannerImageUrl} alt={bannerImageAlt} />
                </div>
              );
            })
          : null}
      </Carousel>
    </div>
  );
}
