import React from 'react';
import Carousel from 'react-material-ui-carousel';
import withStyles from 'isomorphic-style-loader/withStyles';

import { map } from 'lodash';
import styles from './Banner.scss';

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

export default withStyles(styles)(Banner);
