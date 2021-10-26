import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export function CustomCarousel({ data }) {
  return (
    <div style={{ paddingTop: `10px`, paddingBottom: `10px` }}>
      <Carousel
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        showThumbs={false}
      >
        {data.map(({ bannerImageUrl, bannerImageAlt, isActive, id }) => {
          return (
            <div key={id}>
              <img src={bannerImageUrl} alt={bannerImageAlt} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
