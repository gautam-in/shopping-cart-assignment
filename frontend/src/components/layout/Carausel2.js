import React, { useEffect, useState } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

function Carausel2({ data }) {
  const [current, setCurrent] = useState(0);
  let touchstartX = 0;
  let touchMove = 0;

  const nextSlide = () => {
    setCurrent(current !== data.length - 1 ? current + 1 : 0);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1);
  };

  const handleTouchStart = (e) => {
    touchstartX = e.touches[0].screenX;
  };

  const handleTouchMove = (e) => {
    touchMove = e.touches[0].screenX - touchstartX;
  };

  const handleTouchEnd = (e) => {
    if (Math.abs(touchMove) > 50) {
      if (touchMove < 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
  };

  return (
    <div className="container-lg p-0" id="slide-container">
      <div
        className="slide-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {data.map((img, index) => {
          let pos = "next-slide";
          if (index === current) {
            pos = "current-slide";
          }
          if (
            index == current - 1 ||
            (current === 0 && index === data.length - 1)
          ) {
            pos = "prev-slide";
          }

          return (
            <div key={img.id} className={`slide ${pos}`}>
              <img src={img.bannerImageUrl} alt={img.bannerImageAlt} />
            </div>
          );
        })}
        <div className="slide-navigation-next">
          <button aria-label="next slide" onClick={() => nextSlide()}>
            <BsFillArrowRightSquareFill />
          </button>
        </div>
        <div className="slide-navigation-prev">
          <button aria-label="previous slide" onClick={() => prevSlide()}>
            <BsFillArrowLeftSquareFill />
          </button>
        </div>

        <div className="dot-navigation">
          {Array.from({ length: data.length }).map((item, index) => {
            return (
              <div
                aria-label={`slide ${index + 1}`}
                key={index}
                role="button"
                tabIndex="0"
                onClick={() => setCurrent(index)}
                className={index === current ? "dot active" : "dot"}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carausel2;
