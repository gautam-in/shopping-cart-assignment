import React from "react";

export default function Image({ src, ...otherProps }) {
  return <img src={src} {...otherProps} />;
}
