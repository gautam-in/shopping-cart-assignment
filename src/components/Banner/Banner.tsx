import React from "react";
import banners from "../../server/banners/index.get.json";
import "./Banner.scss"

export const Banner = () => {
  const banner = JSON.parse(JSON.stringify(banners[0]));
  
  return (
    <div key={banner.id} className="banner">
      <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt}/>
    </div>
  )
}
