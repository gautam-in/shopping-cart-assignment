import React, { useEffect, useState } from "react";
import Container from "../container/Container";
import Arrow from "./arrow/arrow.component";
import { CarouselContainer, Dot, Indicator } from "./carousel.styles";

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   if (!paused) {
    //     updateIndex(activeIndex + 1);
    //   }
    // }, 3000);
    // return () => {
    //   if (interval) {
    //     clearInterval(interval);
    //   }
    // };
  }, [activeIndex]);
  const updateIndex = (newIndex) => {
    console.log("click");
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  return (
    <CarouselContainer>
      <Container>
        <div
          className="inner"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>
        <Arrow type="prev" onClick={() => updateIndex(activeIndex - 1)}>
          PREV
        </Arrow>
        <Arrow type="next" onClick={() => updateIndex(activeIndex - 1)}>
          NEXT
        </Arrow>
        <Indicator>
          {React.Children.map(children, (child, index) => {
            return (
              <Dot
                color={index === activeIndex ? "#0F0E0E" : " #d8d2cb"}
                onClick={() => {
                  updateIndex(index);
                }}
              />
            );
          })}
        </Indicator>
      </Container>
    </CarouselContainer>
  );
};

export default Carousel;
