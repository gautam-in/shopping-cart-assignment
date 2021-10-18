import React, { useState, useEffect } from "react";
import { getBannerList } from "../../Services/services";

import "./Caurosel.scss";

const Slider = () => {
  const [bannerList, setBannerList] = useState([]);
  const [transX, setTransX] = useState(0);

  const getBanners = async () => {
    const result = await getBannerList();
    setBannerList(result);
  };

  useEffect(() => {
    getBanners();
  }, []);

  const handleNext = () => {
    const newTransx = transX - 100;
    if (Math.abs(newTransx) < bannerList.length * 100) setTransX(newTransx);
    else setTransX(0);
  };
  const handlePrev = () => {
    const newTransx = transX + 100;
    newTransx <= 0
      ? setTransX(newTransx)
      : setTransX(-100 * (bannerList.length - 1));
  };

  return (
    <section className="carousel-section custom-shadow">
      <div
        className="carousel-holder"
        style={{ transform: `translateX(${transX}%)` }}
      >
        {bannerList?.map((item) => (
          <div key={item.id} className="carousel-image">
            <img src={item.bannerImageUrl} alt={item.bannerImageAlt} />
          </div>
        ))}
      </div>
      <div className="backdrop">
        <div name="prev" onClick={handlePrev} className="previous box">
          PREV
        </div>
        <div name="next" onClick={handleNext} className="next box">
          NEXT
        </div>
      </div>
      <div className="img-position">
        {bannerList?.map((x, idx) => (
          <div
           key={idx}
            className={`dot ${
              Math.abs(transX) / 100 === idx ? "dot-selected" : ""
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};
export default Slider;
