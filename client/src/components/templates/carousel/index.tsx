import { useState } from "react";

import { Flex } from "../../atoms";

import "./carousel.scss";

export type Banner = {
  bannerImageUrl: string;
  bannerImageAlt: string;
  isActive: boolean;
  order: number;
  id: string;
};

type ImageCarouselProps = {
  banners: Banner[];
};

export function ImageCarousel({ banners }: ImageCarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? banners.length - 1 : prevSlide - 1
    );
  };

  const handleNext = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === banners.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="image-carousel">
      <div className="image-carousel__slides">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`image-carousel__slide ${
              index === activeSlide ? "image-carousel__slide--active" : ""
            }`}
          >
            <img
              src={`http://localhost:8000/${banner.bannerImageUrl}`}
              alt={banner.bannerImageAlt}
              loading={activeSlide === index ? "eager" : "lazy"}
            />
          </div>
        ))}
        <Flex justify="between" className="image-carousel__buttons">
          <button
            className="image-carousel__button image-carousel__button--prev"
            onClick={handlePrev}
            aria-label="Previous Slide"
          >
            &lt;
          </button>
          <button
            className="image-carousel__button image-carousel__button--next"
            onClick={handleNext}
            aria-label="Next Slide"
          >
            &gt;
          </button>
        </Flex>
      </div>
      <Flex mt="xs" justify="center" className="image-carousel__dots">
        {banners.map((banner, index) => (
          <button
            key={banner.id}
            className={`image-carousel__dot ${
              index === activeSlide ? "image-carousel__dot--active" : ""
            }`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveSlide(index)}
          ></button>
        ))}
      </Flex>
    </div>
  );
}
