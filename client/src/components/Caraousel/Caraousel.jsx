import React, { useState, useEffect, useRef } from "react";
import { CaraouselContainer } from "./Caraousel.styled.js";

const Caraousel = (props) => {
  const { banners } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(banners.length);

  const caraouselRef = useRef(null);
  let startX;
  let deltaX;

  // Set the length to match current banners from props
  useEffect(() => {
    setLength(banners.length);
  }, [banners]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const next = () => {
    const lastIndex = length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const prev = () => {
    const lastIndex = length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    deltaX = e.touches[0].clientX - startX;
    caraouselRef.current.style.transform = `translateX(${
      -1 * currentIndex * 100 + deltaX
    }%)`;
  };

  const handleTouchEnd = (e) => {
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        next();
      } else {
        prev();
      }
    }
    caraouselRef.current.style.transform = `translateX(${
      -1 * currentIndex * 100
    }%)`;
    startX = 0;
    deltaX = 0;
  };

  return (
    <CaraouselContainer>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <button onClick={prev} className="left-arrow">
            PREV
          </button>
          <div
            className="carousel-content-wrapper"
          >
            <div
              className="carousel-content"
              ref={caraouselRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {banners.length>0 && banners.map(el=><img
                className="carousel-image"
                key={el.id}
                src={el.bannerImageUrl}
                alt={el.bannerImageAlt}
              />)}
            </div>
          </div>
          <button onClick={next} className="right-arrow">
            NEXT
          </button>
          <div className="dots">
            {banners.map((el, i) => (
              <button
                aria-label={`${el.bannerImageAlt} Slide`}
                key={el.bannerImageAlt}
                className={`dot ${i === currentIndex ? "active" : ""}`}
                onClick={() => handleDotClick(i)}
              ><span hidden>${el.bannerImageAlt} Slide</span></button>
            ))}
          </div>
        </div>
      </div>
      </CaraouselContainer>  
  );
};

export default Caraousel;