import React from "react";
import classes from "./cheapestprice.module.scss";

function CheapestPriceBanner() {
  return (
    <div className={classes.container}>
      <img
        src="/static/images/lowest-price.png"
        loading="lazy"
        alt="Cheapest price banner"
      />
      <p>You won't find it cheaper anywhere</p>
    </div>
  );
}

export default CheapestPriceBanner;
