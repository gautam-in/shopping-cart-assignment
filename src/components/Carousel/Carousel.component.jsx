import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
const CarouselComponent = () => {
  const [banners, setBanners] = useState(null);

  const getBanners = () => {
    fetch("http://localhost:5000/banners")
      .then((response) => response.json())
      .then((banner) => setBanners(banner))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBanners();
  }, []);

  return (
    <div>
      <Carousel showThumbs={false}>
        {banners &&
          banners.map((item) => (
            <div
              key={item.id}
              style={{
                boxShadow: "0px -12px 28px -28px rgb(0 0 0 / 30%)",
                marginBottom: "4px",
              }}
            >
              <img src={item.bannerImageUrl} alt={item.bannerImageAlt} />
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
