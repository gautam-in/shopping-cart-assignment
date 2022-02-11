import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./style.scss";

function Carousel({ list, length }) {
  const listOfItems = list;
  const [curSlide, setCurSlide] = useState(0);
  const [curbanner, setCurrentBanner] = useState("");
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const currentSlide = (index) => {
    setCurSlide(index);
    setCurrentBanner(showImg(index));
  };

  useEffect(() => {
    setCurrentBanner(showImg(0));
  }, []);

  const showSlide = (value) => {
    let newIndex = curSlide + value;
    setCurSlide(newIndex);

    if (newIndex >= length) {
      newIndex = 0;
      setCurSlide(0);
    }
    if (newIndex < 0) {
      newIndex = length - 1;
      setCurSlide(length - 1);
    }

    setCurrentBanner(showImg(newIndex));
  };

  const showImg = (curSlide) => {
    const cbanner = listOfItems[curSlide];
    return (
      <div key={cbanner.order} className="slides slides--fade">
        <img
          src={cbanner.bannerImageUrl}
          alt={cbanner.bannerImageAlt}
          className="slides__img"
        />
      </div>
    );
  };

  const showDots = listOfItems.map((eachBanner, i) => (
    <span
      key={i}
      tabIndex="0"
      className={i === curSlide ? "dot dot--active" : "dot"}
      onClick={() => currentSlide(i)}
    ></span>
  ));

  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 150) {
      showSlide(1);
    }

    if (touchStart - touchEnd < -150) {
      showSlide(-1);
    }
  }

  return (
    <div
      className="carouselBase"
      onTouchStart={(touchStartEvent) => handleTouchStart(touchStartEvent)}
      onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
      onTouchEnd={handleTouchEnd}
    >
      <button className="btn btn--prev" onClick={() => showSlide(-1)}>
        PREV
      </button>
      {curbanner}
      <div className="dots">{showDots}</div>
      <button className="btn btn--next" onClick={() => showSlide(1)}>
        NEXT
      </button>
    </div>
  );
}

export default Carousel;
