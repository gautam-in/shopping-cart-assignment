import React, { useEffect, useState } from "react";
import axios from "axios";
import { offerImages } from "../../../../utility/groupImage";
import styles from "./Banners.module.scss";
import useInterval from "@src/customHooks/useInterval";

const Banners: any = () => {
  const [data, setData] = useState([]);
  const [transX, setTransX] = useState(0);

  useInterval(() => {
    if (-(data.length - 1) * 100 === transX) setTransX(0);
    else setTransX(transX - 100);
  }, 3000);

  useEffect(() => {
    axios.get("http://localhost:3000/banners").then((response: any) => {
      setData(response.data);
    });
  }, []);

  let items = data.map((item: any) => (
    <img
      src={offerImages[item.bannerImageUrl.split("images/offers/")[1]]}
      alt={item.bannerImageAlt}
      className="wid-100-perc"
      key={item.id}
    />
  ));

  const handleBannerNav = (event: any) => {
    if (event.target.name === "Next") {
      setTransX(transX - 100);
    } else if (event.target.name === "Prev") {
      setTransX(transX + 100);
    }
  };

  return (
    <div
      className={`${styles.BannerContainer} disp-flex wid-100-perc ovrflow-hid align-items-center pos-rel`}
    >
      <input
        type="button"
        value="Prev"
        name="Prev"
        disabled={transX === 0}
        onClick={handleBannerNav}
        onTouchStart={handleBannerNav}
        className={`${styles["Banner-nav-btn"]} pos-abs zIndex-1`}
      />
      <input
        type="button"
        value="Next"
        name="Next"
        disabled={-(data.length - 1) * 100 === transX}
        onClick={handleBannerNav}
        onTouchStart={handleBannerNav}
        className={`${styles["Banner-nav-btn"]} pos-abs right-0 zIndex-1`}
      />
      <div
        className={`${styles["Banner-cont-trans"]} wid-100-perc hei-100-perc disp-flex`}
        style={{ transform: `translateX(${transX}%)` }}
      >
        {items}
      </div>
    </div>
  );
};

export default Banners;
