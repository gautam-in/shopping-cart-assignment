import React from "react";
import "./Banner.scss";
export default function Banner({ data }) {
  return (
    <div>
      <div className="wrapper" style={{backgroundImage:`url(${data.bannerImageUrl})`}}/>
    </div>
  );
}


