import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "./OfferCarousel.module.scss";
export interface OfferCarouselProps {
  bannerImageUrl: string;
  bannerImageAlt: string;
  id: string;
}

const OfferCarousel = ({ data }: { data: OfferCarouselProps[] }) => {
  return (
    <section className={styles["carousel-container"]}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        interval={2000}
        className=""
      >
        {data?.map(
          ({ bannerImageAlt, bannerImageUrl, id }: OfferCarouselProps) => (
            <img key={id} src={bannerImageUrl} alt={bannerImageAlt} />
          )
        )}
      </Carousel>
    </section>
  );
};

export default OfferCarousel;
