import React from "react";
import "./Image.scss";

const Image = ({ source, alt, className = "" }) => {
  return (
    <img src={source} className={`${className} image-wrappper`} alt={alt} />
  );
};

export default Image;
