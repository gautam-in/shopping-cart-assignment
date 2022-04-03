import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Carousel.module.css";

const Carousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [activeSlide, setActiveSlide] = useState(1); //active slide is shown in the slider
  const [maxSlide, setMaxSlide] = useState(null); //total no of carousel slides obtained from API
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  //get carousel Slides from the API and set carouselData state and maxSlide State
  const getCarouselData = async () => {
    const { data } = await axios.get("http://localhost:5000/banners");
    setCarouselData(data);
    setMaxSlide(data.length);
  };

  //sets carousel Data on initial load after fetching from the API
  useEffect(() => {
    getCarouselData();
  }, []);

  //Sets the current slide based on the right Button Click, right arrow press in keyboard
  const rightClickHandler = () => {
    setActiveSlide((prevState) => (prevState === maxSlide ? 1 : prevState + 1));
  };

  // //Sets the current slide based on the left Button Click, left arrow press in keyboard
  const leftClickHandler = () => {
    setActiveSlide((prevState) => (prevState === 1 ? maxSlide : prevState - 1));
  };

  const dotClickHandler = (e) => {
    if (e.target.classList.contains("dots__dot")) {
      setActiveSlide(Number(e.target.dataset.slide));
    }
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
      setActiveSlide((prevState) =>
        prevState === maxSlide ? 1 : prevState + 1
      );
    }

    if (touchEnd && touchStart - touchEnd < -15) {
      setActiveSlide((prevState) =>
        prevState === 1 ? maxSlide : prevState - 1
      );
    }
  };

  return (
    <section className={classes["slider"]}>
      {carouselData &&
        carouselData.map((banner, index) => {
          return (
            <div
              className={classes["slide"]}
              key={banner.id}
              style={{
                transform: `translateX(${100 * (banner.order - activeSlide)}%)`,
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
            </div>
          );
        })}

      <button
        onClick={leftClickHandler}
        className={`${classes["slider__btn"]} ${classes["slider__btn--left"]}`}
      >
        &larr;
      </button>
      <button
        onClick={rightClickHandler}
        className={`${classes["slider__btn"]} ${classes["slider__btn--right"]}`}
      >
        &rarr;
      </button>
      <div onClick={dotClickHandler} className={classes["dots"]}>
        {carouselData.map((banner, i) => {
          return (
            <div
              className={`${classes["dots__dot"]} dots__dot ${
                banner.order === activeSlide ? classes["active"] : ""
              }`}
              data-slide={banner.order}
              key={banner.id}
            ></div>
          );
        })}
      </div>
    </section>
  );
};

export default Carousel;
