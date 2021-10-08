import Carousel from "react-bootstrap/Carousel";
import React from "react";
import Button, { ButtonType } from "components/atoms/button/button";
import { BannerList } from "models/home";
import "modules/home/home.scss";

interface IProps {
  getBannersData: BannerList;
}

const OffersCarousel = (props: IProps): React.ReactElement => {
  const { getBannersData } = props;

  const prevIcon = () => {
    return (
      <Button type={ButtonType.Secondary} id="prev-icon" customClass="carousel-icon">
        PREV
      </Button>
    );
  };

  const nextIcon = () => {
    return (
      <Button type={ButtonType.Secondary} id="next-icon" customClass="carousel-icon">
        NEXT
      </Button>
    );
  };

  return (
    <Carousel nextIcon={nextIcon()} prevIcon={prevIcon()} interval={null}>
      {getBannersData.banners.map((banner) => {
        return (
          <Carousel.Item key={banner.bannerImageAlt}>
            <img src={banner.bannerImageUrl.substring(1)} alt={banner.bannerImageAlt} className="d-block w-100 carousel-image" />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default OffersCarousel;
