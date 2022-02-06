import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

const Banners = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/banners")
      .then((res) => res.json())
      .then((banners) => setBanners(banners));
  }, []);

  return (
    <Carousel fade variant="dark" wrap className="border-bottom">
      {banners.map((banner) => (
        <Carousel.Item key={banner.id}>
          <img
            className="d-block w-100"
            src={banner.bannerImageUrl}
            alt={banner.bannerImageAlt}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banners;
