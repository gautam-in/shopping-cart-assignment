import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Carousel.scss";
import { Carousel as Banner } from "react-responsive-carousel";

class Carousel extends Component {
  render() {
    const images = require.context("../..", true);

    return (
      <Banner showThumbs={false}>
        {this.props.banners.map((banner) => (
          <div>
            <img
              key={banner.id}
              src={images(`.${banner.bannerImageUrl}`)}
              alt={banner.bannerImageAlt}
            />
          </div>
        ))}
      </Banner>
    );
  }
}

export default Carousel;
