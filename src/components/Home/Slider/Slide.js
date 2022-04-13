import React from "react";
import "./Slide.scss";
function Slide(props) {
  return (
    <div className="Slide">
      <img src={props.slideUrl} alt={props.slideUrlAlt} />
    </div>
  );
}

export default Slide;
