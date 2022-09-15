import styles from "./BannerCarousal.module.scss";
import Carousel from "react-bootstrap/Carousel";

const BannerCarousal = ({ banners }) => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel>
        {banners.map((banner) => {
          return (
            <Carousel.Item key={banner.id}>
              <img
                className="d-block w-100"
                src={banner.bannerImageUrl}
                alt={banner.bannerImageAlt}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default BannerCarousal;
