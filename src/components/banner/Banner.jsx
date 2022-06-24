import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import uuid from "node-uuid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const Banner = ({ banners }) => {
  return (
    <>
      <Swiper
        pagination={{ dynamicBullets: true }}
        observeParents={true}
        observer={true}
        observeSlideChildren={true}
        autoplay={{ disableOnInteraction: false, delay: 3000 }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="shadow"
      >
        {banners.data.map((banner) => {
          return (
            <SwiperSlide key={uuid()}>
              <div className="banner">
                <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Banner;
