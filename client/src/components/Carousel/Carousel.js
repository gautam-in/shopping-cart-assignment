import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import PropTypes from 'prop-types';
import { Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/swiper-bundle.min.css";
import "./Carousel.css";

export default function Carousel({data}) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {data.map((img,i) => (
          <>
            <SwiperSlide key={i}>
              <img src={img} alt={`carousel image ${i}`}/>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </>
  );
}

Carousel.propTypes = {
  data: PropTypes.array
}

Carousel.defaultProps = {
  data: []
}