import React from "react";
import "./WrapperText.scss";

export default function WrapperText({ className = "", title, description }) {
  return (
    <div className={className}>
      <h2 className="section__header">{title}</h2>
      <p className="section__text">{description}</p>
    </div>
  );
}
