import React, { useState } from "react";
import Offer1 from "../static/images/offers/offer1.jpg";
import Offer2 from "../static/images/offers/offer2.jpg";
import Offer3 from "../static/images/offers/offer3.jpg";
import Offer4 from "../static/images/offers/offer4.jpg";
import Offer5 from "../static/images/offers/offer5.jpg";
import "../css/Banner.css";

function Banner() {
  const bannerImgList = [Offer1, Offer2, Offer3, Offer4, Offer5];
  const [imgIndex, setImgIndex] = useState(0);

  const imgClickHandler = (type) => {
    if (type === "prev") {
      setImgIndex(imgIndex - 1);
    } else {
      setImgIndex(imgIndex + 1);
    }
  };

  return (
    <div className="banner">
      {imgIndex > 0 ? (
        <button className="banner_prev" onClick={() => imgClickHandler("prev")}>
          Prev
        </button>
      ) : null}
      <img src={bannerImgList[imgIndex]} />
      <div className="banner_dots">
        <span
          onClick={() => setImgIndex(0)}
          className={`${imgIndex == 0 ? "dot_active" : ""}`}
        ></span>
        <span
          className={`${imgIndex === 1 ? "dot_active" : ""}`}
          onClick={() => setImgIndex(1)}
        ></span>
        <span
          onClick={() => setImgIndex(2)}
          className={`${imgIndex === 2 ? "dot_active" : ""}`}
        ></span>
        <span
          className={`${imgIndex === 3 ? "dot_active" : ""}`}
          onClick={() => setImgIndex(3)}
        ></span>
        <span
          className={`${imgIndex === 4 ? "dot_active" : ""}`}
          onClick={() => setImgIndex(4)}
        ></span>
      </div>
      {imgIndex < bannerImgList.length - 1 ? (
        <button className="banner_next" onClick={() => imgClickHandler("next")}>
          Next
        </button>
      ) : null}
    </div>
  );
}

export default Banner;
