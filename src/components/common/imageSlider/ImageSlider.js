import React, { useState } from "react";
import "./ImageSlider.scss";
import { useWindowSize } from "../utils";

const ImageSlider = ({ images }) => {
  const size = useWindowSize();
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  const slideRight = () => {
    setIndex((index + 1) % images.length);
  };

  const dotHandler = (index) => {
    setIndex(index);
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart - touchEnd > 75) {
      slideRight();
    }
    if (touchStart - touchEnd < -75) {
      slideLeft();
    }
  };

  return (
    images.length > 0 && (
      <div
        onTouchStart={(touchStartEvent) => handleTouchStart(touchStartEvent)}
        onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
        onTouchEnd={size.width < 750 ? (e) => handleTouchEnd(e) : () => {}}
        className="imageSliderConatiner"
        style={{ backgroundImage: `url(${images[index].bannerImageUrl})` }}
      >
        {size.width >= 750 && (
          <div className="imageSlider">
            <button onClick={slideLeft}>PREV</button>
            <button onClick={slideRight}>NEXT</button>
          </div>
        )}
        <div className="dotContainer">
          {Array(images.length + 1)
            .join("a")
            .split("")
            .map((item, key) => (
              <button
                key={key}
                onClick={() => dotHandler(key)}
                className={index === key ? "active dot" : "dot"}
              />
            ))}
        </div>
      </div>
    )
  );
};

export default ImageSlider;
