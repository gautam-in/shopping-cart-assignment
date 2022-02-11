import React from 'react';
import { Carousel } from 'react-bootstrap';
import BANNER_DATA from '../../server/banners/index.get.json';
import './banner.styles.scss';

const Banner = () => {
  return (
    <div className="banner">
      <Carousel>
        {BANNER_DATA.map((banner) => (
          <Carousel.Item>
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
