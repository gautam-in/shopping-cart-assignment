import React, { useState, useEffect } from "react";
import './Caraousel.css';

function Caraousel({ banners }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
      const interval = setInterval(() => {
      setCurrentSlide(currentSlide=>(currentSlide + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="card-box-shadow">
      <div className="relative ">
              {banners.map( ({bannerImageUrl, bannerImageAlt, id},i) => (
          <div
            className={`${currentSlide === i ? 'block' : "mySlides"} fade`}
            key={id}
          >
                <img src={bannerImageUrl} className="w-full h-30" alt={ bannerImageAlt} />
          </div>
        ))}
      </div>
      <div className="text-center">
              {banners.map((_,i) => (
          <span
            className={`dot ${currentSlide === i ? "active" : ""}`}
            onClick={() => setCurrentSlide(i)}
            key={i}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Caraousel;
