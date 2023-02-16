import React, { useState, useEffect } from "react";
import './Caraousel.css';

function Caraousel({ imageArr }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
      const interval = setInterval(() => {
      setCurrentSlide(currentSlide=>(currentSlide + 1) % imageArr.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="card-box-shadow">
      <div className="relative ">
              {imageArr.map( ({bannerImageUrl, bannerImageAlt, id},i) => (
          <div
            className={`${currentSlide === i ? 'block' : "mySlides"} fade`}
            key={id}
          >
                <img src={bannerImageUrl} className="w-full h-30" alt={ bannerImageAlt} />
          </div>
        ))}
      </div>
      <div className="text-center">
              {imageArr.map((_,i) => (
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
