import React, { FunctionComponent, SyntheticEvent, useState } from "react";
import { useInView } from "react-intersection-observer";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Section from "../Section";
import "./styles.scss";
import { MdCircle } from "react-icons/md";

type BannerSliderProps = {
  slides: {
    id: string;
    imageUrl: string;
    imageAlt: string;
  }[];
};

const BannerSlider: FunctionComponent<BannerSliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="slider">
        <div ref={sliderRef} className="keen-slider">
          {slides.map((slide) => (
            <Slide
              key={slide.id}
              id={slide.id}
              imageAlt={slide.imageAlt}
              imageUrl={slide.imageUrl}
            />
          ))}
        </div>
        {loaded && instanceRef.current && (
          <div className="slider__actions hidden@mobile hidden@tablet">
            <span className="sr-only" id="slide-label">
              Slide
            </span>
            <button
              className="slider__actions-prev"
              onClick={(e: SyntheticEvent) => {
                e.stopPropagation();
                setCurrentSlide(currentSlide - 1);
                instanceRef.current?.prev();
              }}
              aria-labelledby="slide-label"
              disabled={currentSlide === 0}
            >
              Prev
            </button>

            <button
              className="slider__actions-next"
              onClick={(e: SyntheticEvent) => {
                e.stopPropagation();
                instanceRef.current?.next();
                setCurrentSlide(currentSlide + 1);
              }}
              aria-labelledby="slide-label"
              disabled={currentSlide === slides.length - 1}
            >
              Next
            </button>
          </div>
        )}
        {loaded && instanceRef.current && (
          <div className="slider__pagination">
            {[...Array(slides.length).keys()].map((idx) => {
              return (
                <button
                  key={idx}
                  aria-label={`Slide ${idx}`}
                  onClick={() => {
                    setCurrentSlide(idx);
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={
                    "slider__pagination-dot" +
                    (currentSlide === idx ? " active" : "")
                  }
                >
                  <MdCircle />
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

const Slide: FunctionComponent<{
  id: string;
  imageUrl: string;
  imageAlt: string;
}> = ({ id, imageAlt, imageUrl }) => {
  const { ref, inView } = useInView({});

  return (
    <Section className="keen-slider__slide" key={id}>
      <div className="shadow--sm" ref={ref}>
        {inView && (
          <picture>
            <img src={imageUrl} alt={imageAlt} />
          </picture>
        )}
      </div>
    </Section>
  );
};

export default BannerSlider;
