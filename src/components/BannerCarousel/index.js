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
              aria-label="Previous Banner"
              onClick={onClickHandler}
              role="button"
              style={{ left: 0 }}
              tabIndex="0"
              type="button"
            >
              PREV
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              aria-label="Next Banner"
              onClick={onClickHandler}
              role="button"
              style={{ right: 0 }}
              tabIndex="0"
              type="button"
            >
              NEXT
            </button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li className="custom-control-dots selected" tabIndex="-1" />
            );
          }
          return (
            <li
              className="custom-control-dots"
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              tabIndex="-1"
            />
          );
        }}
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
