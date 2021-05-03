import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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
      <div className={`carousel-item ${activeIndex === index ? 'show' : ''}`} key={id}>
        <img
          loading='lazy'
          src={require(`../../../../static/images/offers/${bannerImageUrl}`).default}
          alt={bannerImageAlt}
          width='100%'
        />
      </div>
    );
  });

  const Arrow = ({ direction, clickFunction, symbol }) => (
    <div className={direction} onClick={clickFunction}>
      {symbol}
    </div>
  );

  const indicators = images.map((image, index) => {
    return (
      <span
        key={index}
        className={`dot ${activeIndex === index ? 'active' : ''}`}
        onClick={() => goToIndex(index)}
      />
    );
  });

  return (
    <div className='carousel'>
      <Arrow direction='prev' clickFunction={previous} symbol='&#10094;' />

      {slides}

      <Arrow direction='next' clickFunction={next} symbol='&#10095;' />

      <div className='carousel-indicators'>{indicators}</div>
    </div>
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
