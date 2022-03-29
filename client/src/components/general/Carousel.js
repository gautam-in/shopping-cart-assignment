// react
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';

/**
 * @name CarouselItem
 * @returns JSX for CarouselItem component
 */
export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel__item" style={{ width: width }}>
      {children}
    </div>
  );
};

/**
 * @name Carousel
 * @returns JSX for Carousel component
 */
const Carousel = ({ children }) => {
  // states
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // below code will apply the auto cycle to images
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 2000);

    // clean up to ensure our interval will stop running when our component is unmount
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  // handlers for swiping images in touchscreen devices
  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  /**
   * @name updateIndex
   * @description function to set the index of active image
   */
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseOver={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>
      <div className="carousel__inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>

      {/* renders control for carousel */}
      <div className="carousel__controls">
        {/* renders next and previous button */}
        <div className="carousel__controls__buttons">
          <button
            className="carousel__controls__button"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}>
            &lt;
          </button>

          <button
            className="carousel__controls__button"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}>
            &gt;
          </button>
        </div>

        {/* renders active image indicator */}
        <div className="carousel__controls__indicators">
          {React.Children.map(children, (child, index) => {
            return (
              <span
                className={`${index === activeIndex ? 'active' : ''}`}
                onClick={() => {
                  updateIndex(index);
                }}>
                {/* active image indicators */}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  children: PropTypes.object,
  width: PropTypes.string
};

Carousel.propTypes = {
  children: PropTypes.array
};

export default Carousel;
