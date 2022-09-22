import { useState } from "react";

import "./carousel.scss";

const Carousel = () => {
  const slides = [
    { url: "images/offers/offer1.jpg", name: "offer1" },
    { url: "images/offers/offer2.jpg", name: "offer2" },
    { url: "images/offers/offer3.jpg", name: "offer3" },
    { url: "images/offers/offer4.jpg", name: "offer4" },
    { url: "images/offers/offer5.jpg", name: "offer5" },
  ];
  const [currentIndex, updateCurrentIndex] = useState(0);
  const slide = { backgroundImage: `url(${slides[currentIndex].url})` };

  const changeImage = (index) => {
    if (index === -1 && currentIndex > 0) updateCurrentIndex(0);
    if (index === slides.length && currentIndex < slides.length - 1) {
      updateCurrentIndex(slides.length - 1);
    }
    if (index >= 0 && index < slides.length && updateCurrentIndex !== index) {
      updateCurrentIndex(index);
    }
  };

  const dots = slides.map((_, index) => {
    return (
      <button
        className={`dot ${currentIndex === index ? "dot-fill" : ""}`}
        onClick={() => changeImage(index)}
      >
        &nbsp;
      </button>
    );
  });

  return (
    <div className="carousel">
      <div className="background-image" style={slide}></div>
      <button
        className="buttons back"
        onClick={() => changeImage(currentIndex - 1)}
      >
        ❰
      </button>
      <button
        className="buttons next"
        onClick={() => changeImage(currentIndex + 1)}
      >
        ❱
      </button>
      <div className="dots">{dots}</div>
    </div>
  );
};

export default Carousel;
