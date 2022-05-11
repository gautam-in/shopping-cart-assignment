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
          <Fragment key={`${val.bannerImageUrl}-${i}`}>
            <SwiperSlide key={`${val.bannerImageUrl}-${i}`}>
              <img src={val.bannerImageUrl} alt={val.bannerImageAlt} width={100} height={100}/>
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