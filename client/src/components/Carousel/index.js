import React from 'react';
import Carousel from 'nuka-carousel';
import styles from './carousel.module.scss';

/**
 * It takes in an array of data and returns a carousel of images
 * @returns A React component that renders a Carousel
 */
export const Banners = ({ data = [] }) => {
  const makeSlide = () => {
    return (
      <Carousel autoplay wrapAround>
        {data?.map((banner) => {
          return <img key={banner.id} src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />;
        })}
      </Carousel>
    );
  };
  return (
    <section>
      <div className={styles.carousel}>{makeSlide()}</div>
    </section>
  );
};
