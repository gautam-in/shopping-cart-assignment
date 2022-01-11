import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Carousel.scss";
import { Carousel as Banner } from "react-responsive-carousel";

class Carousel extends Component {
  render() {
    const images = require.context("../..", true);

    return (
      <header>
        <Banner showThumbs={false}>
          {this.props.banners.map((banner) => (
            <div key={banner.id}>
              <img
                src={images(`.${banner.bannerImageUrl}`)}
                alt={banner.bannerImageAlt}
              />
            </div>
          ))}
        </Banner>
      </header>
    );
  }
}

export default Carousel;
