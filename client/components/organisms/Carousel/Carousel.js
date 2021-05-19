import React, { useEffect, useState } from "react";
import "./Carousel.scss";

function Carousel({ offers = [] }) {
  const [carouselCurrentIndex, setCarouselCurrentIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (offers.length > 0) {
      interval = setTimeout(() => {
        nextCarouselImg();
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [offers, carouselCurrentIndex]);

  const prevCarouselImg = () => {
    setCarouselCurrentIndex((prev) => {
      if (prev === 0) return offers.length - 1;
      return prev - 1;
    });
  };

  const nextCarouselImg = () => {
    setCarouselCurrentIndex((prev) => {
      if (prev === offers.length - 1) return 0;
      return prev + 1;
    });
  };

  return (
    <>
      {offers.length > 0 && (
        <div className="carousel">
          {/* Carousel left controls */}
          <button
            className="carousel__button carousel__button--left"
            onClick={prevCarouselImg}
          >
            &#10094;
          </button>
          {/* Carousel right controls */}
          <button
            className="carousel__button carousel__button--right"
            onClick={nextCarouselImg}
          >
            &#10095;
          </button>
          <div className="carousel_image_wrapper">
            {/* Carousel image */}
            <img
              className="carousel_image_easein"
              key={offers[carouselCurrentIndex]?.id}
              src={offers[carouselCurrentIndex]?.bannerImageUrl}
              alt={offers[carouselCurrentIndex]?.bannerImageAlt}
              width="100%"
              height="100%"
            />
            {/* Carousel indicators */}
            <div className="flexed_center_all width_full carousel_indicators_wrapper">
              {offers.map((offer, index) => (
                <div
                  key={offer.id}
                  className="carousel_indicators"
                  style={{
                    background:
                      carouselCurrentIndex === index ? "#8c8c8c" : "#e0e0e0",
                  }}
                  onClick={() => setCarouselCurrentIndex(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Carousel;
