import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Slider.module.scss";

const Slider = ({ items }) => {
  return (
    <section className={styles.sliderConatiner}>
      <Carousel
        showThumbs={false}
        swipeable={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        showArrows={true}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                style={{ background: "#000" }}
                className={styles.indicators}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              className={styles.indicators}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        {items.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.bannerImageUrl} alt="Producr and offers" />
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};
export default Slider;
