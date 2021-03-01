import React from "react";

function Banner({ o }) {
  return (
    <div className="banner">
      <img src={o.bannerImageUrl} alt="" />
    </div>
  );
}

export default Banner;
