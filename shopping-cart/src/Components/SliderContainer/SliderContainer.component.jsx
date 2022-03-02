import React, { useState, useEffect } from "react";
import { Slider, SliderCarousel, Flex, Square } from "./SliderContainer.styles";
import api from "../../api/data";
import SlideOffer from "../../Components/SlideOffer/SlideOffer.component.jsx";
import { Arrow } from "./SliderContainer.utils";

const SliderContainer = () => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    async function getData() {
      let response = await api.get("/banners");
      let banners = await response.data;
      setSlides(banners);
    }
    getData();
  }, []);
  return (
    <Slider>
      <SliderCarousel
        renderArrow={Arrow}
        renderPagination={({ pages, activePage, onClick }) => {
          return (
            <Flex>
              {pages.map((page) => {
                const isActivePage = activePage === page;
                return (
                  <Square
                    key={page}
                    onClick={() => onClick(page)}
                    active={isActivePage}
                  />
                );
              })}
            </Flex>
          );
        }}
      >
        {slides.map(({ id, ...otherProps }) => {
          return <SlideOffer key={id} {...otherProps} />;
        })}
      </SliderCarousel>
    </Slider>
  );
};

export default SliderContainer;
