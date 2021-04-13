import React from "react";

const Banner = ({ banner }) => {
  return (
    <div className="banner">
      <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
    </div>
  );
}

export default Banner;
