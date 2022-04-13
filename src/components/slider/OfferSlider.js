import { useState, useEffect } from "react";
import styles from "./OfferSlider.module.scss";
import SliderButton from "./SliderButton";

const OfferSlider = () => {
  const [bannerItems, setBannerItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responce = await fetch("http://localhost:5000/banners");
      const data = await responce.json();
      setBannerItems(data);
    };
    fetchData();
  }, []);

  const bannerItemsLength = bannerItems.length;
  const [activeIndex, setActiveIndex] = useState(1);

  const sliders = bannerItems.map((item) => {
    return (
      <article
        className={`${styles.slider} ${
          item.order === activeIndex ? styles["active-slide"] : ""
        }`}
        key={item.id}
      >
        <img src={item.bannerImageUrl} alt={item.bannerImageAlt} />
      </article>
    );
  });

  const dots = bannerItems.map((item) => {
    return (
      <div
        key={item.id}
        className={`${styles.dot} ${
          item.order === activeIndex ? styles["active-dot"] : ""
        }`}
        onClick={() => {
          dotClickHandler(item.order);
        }}
      ></div>
    );
  });

  const nextHandler = (event) => {
    setActiveIndex((prev) => (prev === bannerItemsLength ? 1 : prev + 1));
  };
  const prevHandler = () => {
    setActiveIndex((prev) => (prev === 1 ? bannerItemsLength : prev - 1));
  };

  const dotClickHandler = (index) => {
    setActiveIndex(index);
  };
  return (
    <section className={styles["slider-container"]}>
      {sliders}
      <SliderButton onClick={nextHandler} type="next">
        NEXT
      </SliderButton>
      <SliderButton onClick={prevHandler} type="prev">
        PREV
      </SliderButton>
      <div className={styles["dot-container"]}>{dots}</div>
    </section>
  );
};

export default OfferSlider;
