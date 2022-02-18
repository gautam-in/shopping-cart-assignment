import React from "react";
import { Carousel } from "react-bootstrap";
import './corosel.styles.scss';

function CoroselComponent({ sections }) {
  return (
          <div className="my-carousel-main">
            <Carousel>
              {sections.map(({ bannerImageUrl, bannerImageAlt }) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={bannerImageUrl}
                      alt={bannerImageAlt}
                    />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
  );
}

export default CoroselComponent;
