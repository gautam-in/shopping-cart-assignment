import React, { useState } from "react";
import "./Carousel.scss";
import ImageData from "../../../../server/banners/index.get.json";
import Image from "../../atoms/Image/Image";
import Button from "../../atoms/Button/Button";

export default function Carousel() {
  const [current, setCurrent] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const length = ImageData.length;

  const handleSlide = (slideOrder) => {
    setCurrent(slideOrder);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(0);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchEnd && touchStart - touchEnd > 15) {
      handleSlide(current === length ? 1 : current + 1);
    }

    if (touchEnd && touchStart - touchEnd < -15) {
      handleSlide(current === 1 ? length : current - 1);
    }
  };

  return (
    <section className="carousel">
      <div className="carousel__container">
        {ImageData.map((data) => (
          <div
            key={data.id}
            className={
              data.order === current
                ? "carousel__container__slide active"
                : "carousel__container__slide"
            }
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {data.order === current && (
              <Image
                source={data.bannerImageUrl}
                alt={data.bannerImageAlt}
                className={"carousel__container__slide__image"}
              />
            )}
          </div>
        ))}
      </div>
      <button
        className={"carousel__left-button"}
        onClick={() => handleSlide(current === 1 ? length : current - 1)}
      >
        Prev
      </button>
      <button
        className={"carousel__right-button"}
        onClick={() => handleSlide(current === length ? 1 : current + 1)}
      >
        Next
      </button>
      <div className="carousel__nav">
        {ImageData.map((data) => (
          <Button
            key={data.id}
            className={
              data.order === current
                ? "carousel__nav__dots dots-active"
                : "carousel__nav__dots"
            }
            onClick={() => handleSlide(data.order)}
            aria-label={data.bannerImageAlt}
          ></Button>
        ))}
      </div>
    </section>
  );
}
