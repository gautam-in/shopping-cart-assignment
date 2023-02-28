import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { useQuery } from "react-query";
import { orderBy } from "lodash";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { getBannersApi } from "utils/services";
import Spinner from "components/spinner/Spinner";

const Carousel = () => {
  const banners = useQuery("get-banner", getBannersApi);

  if (banners?.isLoading) return <Spinner />;

  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={1}
      cssMode={true}
      navigation={true}
      loop
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}
    >
      {orderBy(banners?.data?.data, ["order"], ["asc"])
        .filter((item) => item?.isActive)
        .map((banner) => (
          <SwiperSlide key={banner?.id}>
            <img
              src={banner?.bannerImageUrl}
              alt={banner?.bannerImageAlt}
              style={{ marginBottom: "3rem" }}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Carousel;
