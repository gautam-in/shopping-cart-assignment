import React, { useState, useRef, useEffect } from "react";
import banners from "../../server/banners/index.get.json";
import "./Banner.scss"

export const Banner = () => {
  const banner = JSON.parse(JSON.stringify(banners[0]));
  const [active, setActive] = useState(0);

  const handleDotClick = (index: number) => {
    setActive(index);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(active === banners.length - 1 ? 0 : active + 1);
    }, 3000)
    return () => clearInterval(interval);
  }, [active])

  return (
      <div key={banner.id} className="banner">
        <img key={banner.id} src={banner.bannerImageUrl} alt={banner.bannerImageAlt}/>
        { banners.map((banner, index) => {
          return <img className={index === active ? "banner-active" : "banner-inactive"} key={banner.id} src={banner.bannerImageUrl} alt={banner.bannerImageAlt}/>
        })}
      <div className="dots">
        {banners.map((_, index) => {
          return (<span key={index} className={index === active ? "dots--active" : "dots--inactive"} onClick={handleDotClick.bind(null, index)}></span>)
        })}
      </div>
    </div>
  )
}
