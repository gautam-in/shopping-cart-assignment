import React, { useEffect, useState } from "react";
import { fetchBanners } from "../../api/banners";
import classes from "./carousel.module.scss";

function Carousel() {
  const [banners, setBanners] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = () => {
    setCurrentIndex((index) => {
      return index < banners.length - 1 ? index + 1 : index;
    });
  };

  const onPrevious = () => {
    setCurrentIndex((index) => {
      return index > 0 ? index - 1 : index;
    });
  };

  useEffect(() => {
    fetchBanners().then((banners = []) => setBanners(banners));
  }, []);

  return (
    <section className={classes.container}>
      <button
        disabled={currentIndex === 0}
        className={classes.navButton}
        onClick={onPrevious}
      >
        Prev
      </button>
      <button
        disabled={currentIndex === banners.length - 1}
        className={`${classes.navButton} ${classes.next}`}
        onClick={onNext}
      >
        Next
      </button>
      <div className={classes.carouselContainer}>
        {banners.map((banner, index) => (
          <img
            style={{
              zIndex: index === currentIndex ? 4 : 2,
            }}
            key={banner.id}
            src={banner.bannerImageUrl}
            alt={banner.bannerImageAlt}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>
      <ul className={classes.dots}>
        {banners.map((banner, index) => {
          return (
            <li onClick={() => setCurrentIndex(index)} key={banner.id}>
              <button
                className={`${classes.dot} ${
                  currentIndex === index ? classes.selected : ""
                }`}
              >
                {currentIndex === index ? "•" : "◦"}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Carousel;
