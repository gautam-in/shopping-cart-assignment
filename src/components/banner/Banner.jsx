import { v4 } from "node-uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

// Import Swiper styles
import("swiper/css");
import("swiper/css/pagination");
import("swiper/css/navigation");

const Banner = ({ banners }) => {
  return (
    <>
      <Swiper
        pagination={{ dynamicBullets: false }}
        observeParents={true}
        observer={true}
        observeSlideChildren={true}
        navigation={true}
        autoplay={{ disableOnInteraction: false, delay: 3000 }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="shadow"
      >
        {banners.data.map((banner) => {
          return (
            <SwiperSlide key={v4()}>
              <div className="banner">
                <img
                  src={banner.bannerImageUrl}
                  alt={banner.bannerImageAlt}
                  height={"100px"}
                  width={"100px"}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Banner;
