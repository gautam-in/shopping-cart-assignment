import React, { useState } from "react";
import "./Carousel.scss";

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPrev = () => {
    setActiveIndex(activeIndex == 0 ? data.length - 1 : activeIndex - 1);
  };

  const onNext = () => {
    setActiveIndex(activeIndex == data.length - 1 ? 0 : activeIndex + 1);
  };

  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 150) {
      // do your stuff here for left swipe
      onNext();
    }

    if (touchStart - touchEnd < -150) {
      // do your stuff here for right swipe
      onPrev();
    }
  }

  return (
    <div className="carousel">
      {data && data.length > 0 && (
        <>
          <button
            type="button"
            className="prev"
            onClick={onPrev}
            onKeyPress={onPrev}
            tabIndex={0}
          >
            {" < "}
          </button>
          <img
            className="banner-image"
            src={data[activeIndex].bannerImageUrl}
            alt={data[activeIndex].bannerImageAlt}
            height="150"
            width="500"
            onTouchMove={(e) => handleTouchMove(e)}
            onTouchEnd={(e) => handleTouchEnd(e)}
            onTouchStart={(e) => handleTouchStart(e)}
          />
          <div className="banner-dots">
            {data.map((item) => (
              <div
                key={item.id}
                className={
                  item.id == data[activeIndex].id
                    ? "banner-dot active"
                    : "banner-dot"
                }
              />
            ))}
          </div>
          <button
            type="button"
            className="next"
            onClick={onNext}
            onKeyPress={onNext}
            tabIndex={0}
          >
            {" > "}
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
