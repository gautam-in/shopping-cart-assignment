import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropTypes from "prop-types";
import "./slider.styles.scss";
export const Slider = ({ data }) => {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      ariaLabel="offers-carousel"
      useKeyboardArrows
      showStatus={false}
    >
      {data.map(({ id, bannerImageUrl, bannerImageAlt }) => {
        return (
          <div key={id} className="banner-img-container">
            <img
              src={bannerImageUrl}
              alt={bannerImageAlt}
              className="banner-img"
            />
          </div>
        );
      })}
    </Carousel>
  );
};
Slider.propTypes = {
  data: PropTypes.array,
};
