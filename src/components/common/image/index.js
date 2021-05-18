import React from "react";

const Image = (props) => {
  return (
    <picture>
      <source media="(min-width:601px)" srcSet={props.src_2x} />
      <source media="(max-width:600px)" srcSet={props.src} />
      <img
        className={`${props.imgClassName}_avatar`}
        src={props.src}
        alt={props.alt}
        height="auto"
        width="auto"
      />
    </picture>
  );
};

export default Image;
