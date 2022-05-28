import React from "react";
import { Categories } from "../Categories/Categories";
import banners from "../../server/banners/index.get.json";
import "./Main.scss";

export const Main = () => {
  const banner = JSON.parse(JSON.stringify(banners[0]));
  
  return (
    <main>
      <div key={banner.id} className="banner">
        <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt}/>
      </div>
      <Categories />
    </main>
  )
}
