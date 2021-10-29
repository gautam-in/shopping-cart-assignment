import React, { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: "/offer1.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: "/offer2.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: "/offer3.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
  },
  {
    src: "/offer4.jpg",
    altText: "Slide 4",
    caption: "Slide 4",
  },
  {
    src: "/offer5.jpg",
    altText: "Slide 5",
    caption: "Slide 5",
  },
];

const Corousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Image src={item.src} alt={item.altText} width="1900" height="350" />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="«"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="»"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Corousel;
