import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Carousel.scss';

const Carousel = React.memo(({ images }) => {
  const prev = <>&#10094;</>;
  const next = <>&#10095;</>;
  const dot = <>&#8226;</>;
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextSlide = () => {
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previousSlide = () => {
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (id) => {
    setActiveIndex(id);
  };
  const slides = images.map((image, index) => {
    const { id, bannerImageUrl, bannerImageAlt } = image;
    return (
      <li className={`carousel-item ${activeIndex === index ? 'show' : ''}`} key={id}>
        <img src={bannerImageUrl} alt={bannerImageAlt} loading='lazy' />
      </li>
    );
  });
  const indicators = images.map((image, index) => {
    const { id } = image;
    return (
      <li
        key={id}
        className={`dot ${activeIndex === index ? 'active' : ''}`}
        onClick={() => goToIndex(index)}
      >
        {dot}
      </li>
    );
  });

  return (
    <section className='carousel'>
      <button className={'prev carousel_button'} onClick={previousSlide}>
        {prev}
      </button>
      <ul>{slides}</ul>
      <button className={'next carousel_button'} onClick={nextSlide}>
        {next}
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
