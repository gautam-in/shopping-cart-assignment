import React from "react";
import "./SlideOffer.styles.js";
import { Slide } from "./SlideOffer.styles";

const SlideOffer = ({ bannerImageAlt, bannerImageUrl, isActive, order }) => {
  return <Slide src={bannerImageUrl} alt={bannerImageAlt}></Slide>;
};

export default SlideOffer;
