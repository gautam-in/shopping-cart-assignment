import React, { useEffect, useState } from "react";

import * as service from "../Home/Home.service";

import "./Home.scss";

const intialState = {
  data: [],
  loading: false,
  error: false,
};

function Home(props) {
  const [offers, setOffers] = useState([]);
  const [carouselCurrentIndex, setCarouselCurrentIndex] = useState(-1);

  const getOffers = () => {
    /* getOffersForCarousel({ ...intialState, loading: true }); */
    service
      .getOffersForCarousel()
      .then((data) => {
        setOffers(data);
        setCarouselCurrentIndex(0);
        /* setProductDetails({ ...intialState, data, loading: false }); */
      })
      .catch((err) => {
        console.log("ERROR detected fetching products", err);
        /*  setProductDetails({ ...intialState, loading: false, error: true }); */
      });
  };

  const prevCarouselImg = () => {
    setCarouselCurrentIndex((prev) => {
      if (prev === 0) return offers.length - 1;
      return prev - 1;
    });
  };

  const nextCarouselImg = () => {
    setCarouselCurrentIndex((prev) => {
      if (prev === offers.length - 1) return 0;
      return prev + 1;
    });
  };

  useEffect(() => {
    /* dispatch(fetchProducts()); */
    /* getProductsList(); */
    getOffers();
  }, []);

  useEffect(() => {
    const interval = setTimeout(() => {
      nextCarouselImg();
    }, 2000);
    return () => clearInterval(interval);
  }, [carouselCurrentIndex]);

  return (
    <div
      className=""
      style={
        {
          //height: "250px"
        }
      }
    >
      {carouselCurrentIndex > -1 && (
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            className="carousel__buttton carousel__buttton--left"
            onClick={prevCarouselImg}
          >
            &#10094;
          </button>
          <button
            className="carousel__buttton carousel__buttton--right"
            onClick={nextCarouselImg}
          >
            &#10095;
          </button>
          <div className="wrapper">
            <img
              className="carousel_image_easein"
              key={offers[carouselCurrentIndex]?.id}
              src={offers[carouselCurrentIndex]?.bannerImageUrl}
              alt={offers[carouselCurrentIndex]?.bannerImageAlt}
            />
            <div
              className="flexed_center_all width_full"
              style={{
                position: "absolute",
                bottom: "15px",
              }}
            >
              {offers.map((offer, index) => (
                <div
                  key={offer.id}
                  className="carousel_tracker"
                  style={{
                    width: "10px",
                    height: "10px",
                    display: "inline-block",
                    background:
                      carouselCurrentIndex === index ? "#8c8c8c" : "#e0e0e0",
                    borderRadius: "50%",
                    marginRight: "26px",
                    cursor: "pointer",
                  }}
                  onClick={() => setCarouselCurrentIndex(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
