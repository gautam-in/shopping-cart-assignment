import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchBannersAction } from "../../Store/Banner/banner.action";

export default function TopCarousel() {
  const { allBanners } = useSelector((state) => state.banners);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBannersAction());
  }, [dispatch]);

  return (
    <div className="banner">
      <div className="carousel-container">
        <Carousel
          infiniteLoop
          autoPlay
          useKeyboardArrows
          centerMode
          showThumbs={false}
        >
          {!allBanners.length ? (
            <div>Loading...</div>
          ) : (
            allBanners.map((banner) => (
              <div key={banner.id}>
                <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
              </div>
            ))
          )}
        </Carousel>
      </div>
    </div>
  );
}
