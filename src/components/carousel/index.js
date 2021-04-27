import React, { useState, useEffect } from "react";

import "./index.scss";

import Arrow from "../common/arrow";
import Image from "../common/image";
import FetchData from "../common/fetch-data";

import offer1 from "../../../static/images/offers/offer1.jpg";
import offer2 from "../../../static/images/offers/offer2.jpg";
import offer3 from "../../../static/images/offers/offer3.jpg";
import offer4 from "../../../static/images/offers/offer4.jpg";
import offer5 from "../../../static/images/offers/offer5.jpg";

const Carousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [activeCarouselData, setActiveCarouselData] = useState({});

  useEffect(() => {
    FetchData("http://localhost:5000/banners/")
      .then((res) => {
        setCarouselData(res);
        setActiveCarouselData(res[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const previousSlide = () => {
    const lastIndex = carouselData.length - 1;
    const indexValue = carouselData.findIndex(
      (singleData) => singleData.id === activeCarouselData.id
    );
    const shouldResetIndex = indexValue === 0;
    const index = shouldResetIndex ? lastIndex : indexValue - 1;
    setActiveCarouselData(carouselData[index]);
  };

  const nextSlide = () => {
    const lastIndex = carouselData.length - 1;
    const indexValue = carouselData.findIndex(
      (singleData) => singleData.id === activeCarouselData.id
    );
    const shouldResetIndex = indexValue === lastIndex;
    const index = shouldResetIndex ? 0 : indexValue + 1;
    setActiveCarouselData(carouselData[index]);
  };

  const Slide = (data) => {
    const imageFileList = {
      0: offer1,
      1: offer2,
      2: offer3,
      3: offer4,
      4: offer5,
    };
    if (Object.keys(data).length) {
      const indexValue = carouselData.findIndex(
        (singleData) => singleData.id === activeCarouselData.id
      );
      const imageFile = imageFileList[indexValue];
      const bannerImageProps = {
        src_2x: imageFile,
        src: imageFile,
        alt: data.bannerImageAlt,
        imgClassName: "banner",
      };
      return <Image {...bannerImageProps} />;
    } else {
      return null;
    }
  };

  return (
    <div className="carousel">
      <Arrow direction="left" clickFunction={previousSlide} glyph="prev" />
      <Slide {...activeCarouselData} />
      <Arrow direction="right" clickFunction={nextSlide} glyph="next" />
    </div>
  );
};

export default Carousel;
