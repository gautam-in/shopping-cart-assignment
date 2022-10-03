import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import styles from "./HomeCarousel.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import useHttp from "../customHook/useHttp";
export const HomeCarousel = () => {
  const [carouselData, setCarouselData] = useState();
  const { sendHttpRequest } = useHttp();
 

  useEffect(() => {
    sendHttpRequest({
      url: "http://localhost:5000/banners",
    }).then((response) => setCarouselData(() => response.data));
  }, [sendHttpRequest]);

  return (
    <div className={styles.carouselWrapper}>
      <Carousel
        nextIcon={<p role="button"  aria-label="Next" className={styles.nextIcon}>Next</p>}
        prevIcon={<p  role="button"  aria-label="Previous" className={styles.prevIcon}>Prev</p>}
      >
        {carouselData && carouselData.length !== 0
          ? carouselData.map((item, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                  rel="preload"
                    className="d-block w-100"
                    src={item.bannerImageUrl.replace(".jpg",".webp")}
                    alt="carouselImage"
                  />
                </Carousel.Item>
              );
            })
          : "No data Available"}
      </Carousel>
      <div className={styles.one_edge_shadow}>&nbsp;</div>
    </div>
  );
};
