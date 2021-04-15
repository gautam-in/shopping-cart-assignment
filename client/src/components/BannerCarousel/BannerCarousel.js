import React, { useEffect, useState, useRef } from "react";
import instance from "../../axios-instance";

const BannerCarousel = () => {
  const [sliders, setsliders] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    instance.get("/banners").then((res) => setsliders(res.data));
  }, []);

  useEffect(() => {
    // auto slide with 3 second gap
    const timerId = setInterval(() => {
      if (sliders.length > 1 && selectedIndex < sliders.length - 1) {
        const nextIndex = selectedIndex + 1;
        handleSlide(nextIndex);
      } else {
        const nextIndex = 0;
        handleSlide(nextIndex);
      }
    }, 3000);
    return () => clearInterval(timerId);
  });

  const handleSlide = (index) => {
    sliderRef.current.style.transform = `translate(-${
      index * sliderRef.current.offsetWidth
    }px)`;
    setSelectedIndex(index);
  };

  return (
    <div className="shadow-row">
      <div className="slider-container ">
        <div className="sliders" ref={sliderRef}>
          {sliders &&
            sliders.length > 0 &&
            sliders.map((slider) => (
              <div className="slider" key={slider.id}>
                <img src={slider.bannerImageUrl} alt={slider.bannerImageAlt} />
              </div>
            ))}
        </div>{" "}
        <div className="indicators">
          {sliders &&
            sliders.length > 0 &&
            sliders.map((slider, i) => (
              <svg
                height="10"
                width="10"
                className={`dot ${selectedIndex === i ? "active" : ""}`}
                key={slider.id}
                onClick={() => handleSlide(i)}
              >
                <circle cx="5" cy="5" r="5" fill="currentColor" />
              </svg>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
