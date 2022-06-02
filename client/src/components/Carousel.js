import React, { useState, useEffect } from "react";

let ctr = 0;
let intervel;

function Carousel({ bannerData }) {
  let [bannerImage, setBannerImage] = useState([]);

  let setctr = (ind) => {
    ctr = ind;

    clearInterval(intervel);

    setBannerImage([
      bannerData[ctr % 5]?.bannerImageUrl,
      bannerData[ctr % 5]?.bannerImageAlt,
    ]);

    intervel = setInterval(() => {
      setBannerImage([
        bannerData[ctr % 5]?.bannerImageUrl,
        bannerData[ctr % 5]?.bannerImageAlt,
      ]);
    }, 2000);
  };

  useEffect(() => {
    setBannerImage([
      bannerData[ctr % 5]?.bannerImageUrl,
      bannerData[ctr % 5]?.bannerImageAlt,
    ]);
    intervel = setInterval(() => {
      setBannerImage([
        bannerData[ctr % 5]?.bannerImageUrl,
        bannerData[ctr % 5]?.bannerImageAlt,
      ]);
    }, 2000);

    return () => clearInterval(intervel);
  }, [bannerData]);

  let imageMover = bannerData.map((ban, index) => {
    return (
      <p
        className={ctr % 5 === index ? "activeCl" : ""}
        onClick={() => setctr(index)}
        key={ban.id}
      >
        &#8226;
      </p>
    );
  });

  ctr++;

  return (
    <section className="banners">
      <img
        src={bannerImage[0]}
        alt={bannerImage[1]}
        height={288}
        width={1370}
      />
      <div>{imageMover}</div>
    </section>
  );
}

export default Carousel;
