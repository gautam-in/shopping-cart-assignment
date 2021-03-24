import React from 'react';
import Carousel from 'react-material-ui-carousel';

import './Banner.scss';
import { map } from 'lodash';

function Banner({ banners }) {
  return (
    <div className="banner-section">
      <Carousel
        className="banner-item"
      >
        {
          map(banners, (item) => (
            <figure key={`item-${item.id}`}>
              <img className="banner-image" src={item.bannerImageUrl} alt={item.bannerImageAlt} />
            </figure>
          ))
        }
      </Carousel>
    </div>
  );
}

export default Banner;
