import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useViewport } from "../../hooks/useDevice";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.scss";

const BannerCarousel = ({ banners }) => {
  const { isMobile } = useViewport();
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay={true}
        autoFocus={false}
        infiniteLoop={true}
        showArrows={!isMobile ? true : false}
        showStatus={false}
        showThumbs={false}
        stopOnHover={true}
        swipeable={true}
        useKeyboardArrows={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ left: 0 }}
              aria-label="Previous Banner"
            >
              PREV
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ right: 0 }}
              aria-label="Next Banner"
            >
              NEXT
            </button>
          )
        }
      >
        {banners.map((banner) => (
          <div key={banner.id}>
            <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
