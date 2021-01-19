import React from "react";
import "./Carousel.scss";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import * as Constants from "../../global-constants";
import GreyButton from "../Buttons/GreyButton";
import CarouselNavigation from "../Buttons/CarouselNavigation";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Carousel(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.items.length | 0;

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1
    );
  };

  const handleSlideChange = step => {
    setActiveStep(step)
  }

  return (
    props.items.length && (
      <div className="carousel">
        <AutoPlaySwipeableViews index={activeStep}>
          {props.items.map((item, idx) => {
            return (
              <div key={item.id}>
                <img
                  src={`public${item.bannerImageUrl}`}
                  alt={item.bannerImageAlt}
                  className="carousel-img"
                />
              </div>
            );
          })}
        </AutoPlaySwipeableViews>
        {(props.screenSize === Constants.ScreenTablet ||
          props.screenSize === Constants.ScreenLaptop) && (
          <div className="carousel-buttons">
            <GreyButton text={Constants.Previous} handleClick={handleBack} />
            <GreyButton text={Constants.Next} handleClick={handleNext} />
          </div>
        )}
        <CarouselNavigation items={props.items} selectSlide={handleSlideChange} active={activeStep}/>
      </div>
    )
  );
}
