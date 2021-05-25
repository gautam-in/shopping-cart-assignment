import React, { useContext, useEffect, useState } from "react";
import { DeviceContext } from "../../../App";

import useTouch from "../../customHooks/useTouch";

import "./Carousel.scss";

function Carousel({ offers = [] }) {
  const { isMobile } = useContext(DeviceContext);

  const [carouselCurrentIndex, setCarouselCurrentIndex] = useState(0);
  const { touchStart, touchMove, touchEnd } = useTouch();

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
    setCarouselCurrentIndex((prev) =>
      prev === 0 ? offers.length - 1 : prev - 1
    );
  };

  const nextCarouselImg = () => {
    setCarouselCurrentIndex((prev) =>
      prev === offers.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {offers.length > 0 && (
        <div
          data-test="component-corousel"
          className="carousel"
          onTouchStart={touchStart}
          onTouchMove={touchMove}
          onTouchEnd={() => touchEnd(nextCarouselImg, prevCarouselImg)}
        >
          {!isMobile && (
            <>
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
            </>
          )}

          {/* Carousel image with zoom in animation*/}
          <div className="carousel_appear_wrapper">
            {offers.map((offer, i) => (
              <div
                key={offer.id}
                className={
                  carouselCurrentIndex === i
                    ? "carousel_appear active"
                    : "carousel_appear"
                }
              >
                <img
                  src={offer.bannerImageUrl}
                  alt={offer.bannerImageAlt}
                  width="100%"
                  height="100%"
                />
              </div>
            ))}
          </div>

          {/* Carousel image with slide animation*/}
          {/* <div className="carousel_slide_wrapper">
            <div
              className="carousel_slide flexed"
              style={{
                transform: `translate(${-(carouselCurrentIndex * 100) + 5}%)`,
              }}
            >
              {offers.map((offer, i) => (
                <img
                  key={offer.id}
                  src={offer.bannerImageUrl}
                  alt={offer.bannerImageAlt}
                  width="100%"
                  height="100%"
                  style={{
                    transform:
                      carouselCurrentIndex === i ? "scale(1)" : "scale(0.6)",
                    transformOrigin:
                      carouselCurrentIndex > i ? "right" : "left",
                  }}
                />
              ))}
            </div>
          </div> */}

          {/* Carousel indicators */}
          <div className="flexed_center_all width_full carousel_indicators_wrapper">
            {offers.map((offer, index) => (
              <div
                key={offer.id}
                className={
                  carouselCurrentIndex === index
                    ? "carousel_indicators carousel_indicators--active"
                    : "carousel_indicators"
                }
                onClick={() => setCarouselCurrentIndex(index)}
              ></div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Carousel;
