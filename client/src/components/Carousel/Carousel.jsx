import { useState } from "react";
import Image from "../UI Components/Image/Image";
import SideHandler from "../SideHandler/SideHandler";
import classes from "./Carousel.module.css";

const Carousel = ({ banners }) => {
  const [current, setCurrent] = useState(1);
  const length = banners.length;

  const handleSlide = (currentSlide) => {
    setCurrent(currentSlide);
  };

  return (
    <section className={classes.carousel}>
      <div className={classes.carousel__container}>
        {banners.map((data) => (
          <div
            key={data.id}
            className={
              data.order === current
                ? `${classes.carousel__container__slide} ${classes.active}`
                : `${classes.carousel__container__slide}`
            }
          >
            {data.order === current && (
              <Image
                source={data.bannerImageUrl}
                alt={data.bannerImageAlt}
                className={classes.carousel__container__slide__image}
              />
            )}
          </div>
        ))}
      </div>
      <SideHandler
        current={current}
        length={length}
        className={classes.carousel__left__button}
        handleSlide={handleSlide}
      />
      <SideHandler
        current={current}
        length={length}
        className={classes.carousel__right__button}
        handleSlide={handleSlide}
      />
    </section>
  );
};

export default Carousel;
