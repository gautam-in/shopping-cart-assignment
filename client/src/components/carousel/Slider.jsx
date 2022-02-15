import React from "react";
import CarouselItem from "./carousel-item/carousel-item.component";
import Carousel from "./carousel.component";
const offers = [
  {
    id: 1,
    url: "../../assets/offers/offer1.jpg",
    alt: "Dove Shampoo",
  },
  {
    id: 2,
    url: "../../assets/offers/offer2.jpg",
    alt: "Surf Excel",
  },
  {
    id: 3,
    url: "../../assets/offers/offer3.jpg",
    alt: "Domex Fresh Clean",
  },
  {
    id: 4,
    url: "../../assets/offers/offer4.jpg",
    alt: "Shampoo",
  },
  {
    id: 5,
    url: "../../assets/offers/offer5.jpg",
    alt: "Tea",
  },
];
const Slider = () => {
  return (
    <Carousel>
      {offers.map(({ url, alt }, index) => (
        <CarouselItem key={index}>
          <img src={url} alt={alt} />
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default Slider;
