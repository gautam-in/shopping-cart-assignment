import React from "react";
import banners from "../../server/banners/index.get.json";
import "./Main.scss";

export const Main = () => {

  return (
    <main>
        <div className="banner-1">
          { banners.map((banner) => {
            return (
            <div key={banner.id} className="banner">
              <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt}/>
            </div>)
          })}
        </div>
    </main>
  )
}
