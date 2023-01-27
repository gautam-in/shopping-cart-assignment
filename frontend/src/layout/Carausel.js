import React, { useEffect, useState } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

function Carausel({ data }) {
  const [current, setCurrent] = useState(0);
  let touchstartX = 0;
  let touchendX = 0;

  const nextSlide = () => {
    setCurrent(current !== data.length - 1 ? current + 1 : 0);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1);
  };

  useEffect(() => {
    let slide_container = document.getElementById("slide-container");

    function checkDirection() {
      if (touchendX < touchstartX) prevSlide();
      if (touchendX > touchstartX) nextSlide();
    }

    slide_container.addEventListener("touchstart", (e) => {
      touchstartX = e.changedTouches[0].screenX;
    });

    slide_container.addEventListener("touchend", (e) => {
      touchendX = e.changedTouches[0].screenX;
      checkDirection();
    });
  }, [touchendX]);

  return (
    <div className="container-lg p-0" id="slide-container">
      <div className="slide-container">
        {data.map((img, index) => {
          if (index === current) {
            return (
              <div
                key={img.id}
                className={index === current ? "slide active" : "slide"}
              >
                <img src={img.bannerImageUrl} alt={img.bannerImageAlt} />
              </div>
            );
          }
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

export default Carausel;
