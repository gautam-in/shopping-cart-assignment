import { Fragment } from 'react';
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
    <Fragment>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
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