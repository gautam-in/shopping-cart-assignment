import React, { useEffect, useState } from "react";

function OfferBanner() {
  const images = [
    "images/offers/offer1.jpg",
    "images/offers/offer2.jpg",
    "images/offers/offer3.jpg",
    "images/offers/offer4.jpg",
    "images/offers/offer5.jpg",
  ];
  let index = 1;
  const [imageURL, setImageURL] = useState(images[0]);
  useEffect(() => {
    const arrSize = images.length;

    let interval = setInterval(() => {
      if (arrSize === index) index = 0;
      setImageURL(images[index]);
      index++;
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="offer-banner-container">
      <img width="100%" src={imageURL} alt="banner" />
      
      <div className="dot-container">
        {images.map((item) => {
          return (
            <span
            key={item}
              className={imageURL === item ? "dot active-dot" : "dot"}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default OfferBanner;
