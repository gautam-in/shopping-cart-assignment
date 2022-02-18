import React from "react";
import classes from "./Image.module.css";

const Image = ({ source, alt, className = "" }) => {
  return (
    <img
      src={source}
      className={`${className} ${classes.image__wrappper}`}
      alt={alt}
    />
  );
};

export default Image;
