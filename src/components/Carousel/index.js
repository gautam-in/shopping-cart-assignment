import React, { useCallback, useEffect, useState } from "react";
import classes from "./Carousel.module.css";
import axios from "axios";
const Carousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [activeSlide, setActiveSlide] = useState(1); //active slide is shown in the slider
  const [maxSlide, setMaxSlide] = useState(null); //total no of carousel slides obtained from API

  //get carousel Slides from the API and set carouselData state and maxSlide State
  const getCarouselData = async () => {
    const { data } = await axios.get("http://localhost:5000/banners");
    console.log(data);
    setCarouselData(data);
    setMaxSlide(data.length);
  };

  //Sets the current slide based on the right Button Click, right arrow press in keyboard
  const rightClickHandler = useCallback(() => {
    if (activeSlide === maxSlide) {
      setActiveSlide(1);
    } else {
      setActiveSlide((prevState) => prevState + 1);
    }
  }, [activeSlide, maxSlide]);

  //Sets the current slide based on the left Button Click, left arrow press in keyboard
  const leftClickHandler = useCallback(() => {
    if (activeSlide === 1) {
      setActiveSlide(maxSlide);
    } else {
      setActiveSlide((prevState) => prevState - 1);
    }
  }, [activeSlide, maxSlide]);

  const dotClickHandler = (e) => {
    if (e.target.classList.contains("dots__dot")) {
      console.log(e);
      setActiveSlide(Number(e.target.dataset.slide));
    }
  };

  //calls the above two functions(leftClickHandler, rightClickHandler) based on the key pressed
  const keyDownHandler = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") {
        leftClickHandler();
      }
      if (e.key === "ArrowRight") {
        rightClickHandler();
      }
    },
    [leftClickHandler, rightClickHandler]
  );

  //sets carousel Data on initial load after fetching from the API
  useEffect(() => {
    getCarouselData();
  }, []);

  //attaches keydown handlers on component mount and cleans on component unmount
  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [keyDownHandler]);

  return (
    <div className={classes["slider"]}>
      {carouselData &&
        carouselData.map((banner, index) => {
          return (
            <div
              className={classes["slide"]}
              key={banner.id}
              style={{
                transform: `translateX(${100 * (banner.order - activeSlide)}%)`,
              }}
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
        {carouselData.map((banner) => {
          return (
            <div
              className={`${classes["dots__dot"]} dots__dot`}
              data-slide={banner.order}
              key={banner.id}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
