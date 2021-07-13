import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getbanner } from "../../redux/banner/actionCreator";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function CarouselHome() {
  const bannerData = useSelector((state) => state.getBanDetail.banners);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getbanner());
  }, [dispatch]);
  return (
    <div className="app-bottom-shadow">
      <div className="app-carousel">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          showArrows={true}
        >
          {bannerData.map((data) => (
            <div key={data.id}>
              <img
                src={data.bannerImageUrl}
                alt={data.bannerImageAlt}
                loading="lazy"
                width="1200"
                height="300"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default React.memo(CarouselHome);
