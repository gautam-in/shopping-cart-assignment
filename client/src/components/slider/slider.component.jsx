import React, { useState } from "react";
import classnames from "classnames";
import "./slider.styles.scss";

const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderDot = () => {
    const items = data.map((list, idx) => {
      if (list.order === idx + 1) {
        return (
          <span
            key={idx}
            className={classnames(
              currentIndex === idx
                ? "slideshow__dot--active"
                : "slideshow__dot--noactive",
              "slideshow__dot"
            )}
            onClick={() => setCurrentIndex(currentIndex + 1)}
          ></span>
        );
      }
    });

    return items;
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow--display slideshow--fade">
        <img
          src={data.length ? data[currentIndex].bannerImageUrl : ""}
          alt={data.length ? data[currentIndex].bannerImageAlt : ""}
        />

        <div className="slideshow">{renderDot()}</div>
      </div>
      {currentIndex > 0 ? (
        <span
          className="slideshow__prev"
          onClick={() => setCurrentIndex(currentIndex - 1)}
        >
          &#10094;
        </span>
      ) : null}
      {currentIndex < data.length - 1 ? (
        <span
          className="slideshow__next"
          onClick={() => setCurrentIndex(currentIndex + 1)}
        >
          &#10095;
        </span>
      ) : null}
    </div>
  );
};

export default Slider;
