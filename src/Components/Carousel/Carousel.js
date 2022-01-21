import { useState } from "react";
import Button from "../UI Components/Button/Button";
import Image from "../UI Components/Image/Image";
import ImageData from "../../server/banners/index.get.json";
import "./Carousel.scss";

const Carousel = () => {
  const [current, setCurrent] = useState(1);
  const length = ImageData.length;

  const handleSlide = (slide) => {
    setCurrent(slide);
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
};

export default Carousel;
