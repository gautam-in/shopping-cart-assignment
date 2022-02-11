import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import { Carousel } from 'react-bootstrap';
import BANNER_DATA from '../../server/banners/index.get.json';
import './banner.styles.scss';

const Banner = () => {
  return (
    <div className="banner">
      <Carousel>
        {BANNER_DATA.map((banner) => (
          <Carousel.Item>
            {console.log(banner.bannerImageUrl)}
            <img
              key={banner.id}
              src={banner.bannerImageUrl}
              alt={banner.bannerImageAlt}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
