import React from "react";
import classes from "./OfferBanner.module.scss";

export default function OfferBanner({
  order,
  bannerImageAlt,
  bannerImageUrl,
  id,
}) {
  return (
    <img
      className={classes.container}
      src={bannerImageUrl}
      alt={bannerImageAlt}
    />
  );
}
