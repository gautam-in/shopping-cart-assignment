import React from "react";

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
    <span>{glyph}</span>
  </div>
);

export default Arrow;
