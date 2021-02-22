import React from "react";
import Carousel from "nuka-carousel";
import Classes from "./Carousel.css";

const CarousalComponent = ({ banners }) => {
  let notMobile = true; //initiate as false
  // device detection
  if (window.screen.width <= 500) {
    notMobile = null;
  }
  return (
    <div className={Classes.CarousalWrapper}>
      {notMobile !== null ? (
        <Carousel>
          {banners &&
            banners.length > 0 &&
            banners.map((item) => {
              let path = `../..${item.bannerImageUrl}`;
              return (
                <div key={item.id}>
                  <img
                    src={`${path}`}
                    alt={item.bannerImageAlt}
                    className={Classes.CarousalImg}
                  />
                </div>
              );
            })}
        </Carousel>
      ) : (
        <Carousel
          renderCenterLeftControls={notMobile}
          renderCenterRightControls={notMobile}
        >
          {banners &&
            banners.length > 0 &&
            banners.map((item) => {
              let path = `../..${item.bannerImageUrl}`;
              return (
                <div key={item.id}>
                  <img
                    src={`${path}`}
                    alt={item.bannerImageAlt}
                    className={Classes.CarousalImg}
                  />
                </div>
              );
            })}
        </Carousel>
      )}
    </div>
  );
};
export default CarousalComponent;
