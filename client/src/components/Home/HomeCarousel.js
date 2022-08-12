import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchBannerAction } from "../../Action";
import Banner1 from "../../assets/images/diwali-banner1.webp";
import Banner2 from "../../assets/images/diwali-banner2.webp";
import Banner3 from "../../assets/images/diwali-banner3.webp";
import { store } from "../../store";
import { CarouselItem } from "../Home/HomeCarousel.styles";
const bannersStore = (state) => state.banners.map((banner) => banner);

function HomeCarousel() {
  const bannersSelect = useSelector(bannersStore);
  // console.log("bannersSelect >>>", bannersSelect);
  const dispatch = useDispatch();
  useEffect(() => {
    store.dispatch(fetchBannerAction());
  }, []);

  return (
    <CarouselItem className="banners">
        <Carousel>
          {bannersSelect.map((banner) => <Carousel.Item key={banner.id}>
              <img
                className="d-block w-100"
                src={banner.bannerImageUrl}
                alt={banner.bannerImageAlt}
              />
            </Carousel.Item>
          )}
        </Carousel>
      </CarouselItem>
  );
}

export default HomeCarousel;
