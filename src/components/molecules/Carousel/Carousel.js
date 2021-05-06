import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Image from '../../atoms/Image';
import { prevArrow, nextArrow, dot } from '../../atoms/Constants';
import './Carousel.scss';

const Carousel = React.memo(({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const next = () => {
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const slides = images.map((image, index) => {
    const { id, bannerImageUrl, bannerImageAlt } = image;
    return (
      <li className={`carousel-item ${activeIndex === index ? 'show' : ''}`} key={id}>
        <Image name={`offers/${bannerImageUrl}`} alt={bannerImageAlt} />
      </li>
    );
  });

  const indicators = images.map((image, index) => {
    return (
      <li
        key={index}
        className={`dot ${activeIndex === index ? 'active' : ''}`}
        onClick={() => goToIndex(index)}
      >
        {dot}
      </li>
    );
  });

  return (
    <section className='carousel'>
      <button className={'prev'} onClick={previous}>
        {prevArrow}
      </button>
      <ul>{slides}</ul>
      <button className={'next'} onClick={next}>
        {nextArrow}
      </button>
      <ul className='carousel-indicators'>{indicators}</ul>
    </section>
  );
});

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      bannerImageUrl: PropTypes.string.isRequired,
      bannerImageAlt: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Carousel;
