import { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";


const CarouselComponent = ({ bannerData }) => {
  return (
    <Fragment>
      <Carousel>
        {bannerData && bannerData.map((banner) => {
          return (
            <Carousel.Item key={banner.id}>
              <img
                className="d-block w-100"
                src={banner.bannerImageUrl}
                alt="First slide"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
      </Fragment>
  );
};

export default CarouselComponent;