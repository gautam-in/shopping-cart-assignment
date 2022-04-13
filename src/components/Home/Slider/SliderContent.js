import React from "react";
import "./SliderContent.scss";
import Slide from "./Slide";

function SliderContent(props) {
  console.log(props.images);
  return (
    <div className="SliderContent">
      {props.images &&
        props.images.map((item) => {
          return (
            <Slide
              key={item.id}
              slideUrl={item.bannerImageUrl}
              slideUrlAlt={item.bannerImageAlt}
            />
          );
        })}
    </div>
  );
}

export default SliderContent;
