import { Fragment } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from 'prop-types';
import { Pagination, Navigation, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/bundle";
import "./Carousel.css";

export default function Carousel({data}) {
  return (
    <Fragment>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((val,i) => (
          <Fragment>
            <SwiperSlide key={i}>
              <img src={val.bannerImageUrl} alt={val.bannerImageAlt}/>
            </SwiperSlide>
          </Fragment>
        ))}
      </Swiper>
    </Fragment>
  );
}

Carousel.propTypes = {
  data: PropTypes.array
}

Carousel.defaultProps = {
  data: []
}