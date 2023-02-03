import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard , Autoplay,} from "swiper";
import {useDispatch,useSelector} from 'react-redux';
import {getBanners} from '../../redux/actionCreators/actionCreators';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./banner.scss";



export default function Banner() {
    const banners = useSelector(state => state.data.banners);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(banners.status !== 'success')
        dispatch(getBanners());
    },[dispatch])

  return (
    <>
      <div className='slideshow__container'>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{clickable: true}}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard ,Autoplay]}
        className="mySwiper"
      >
        {
            banners?.data && banners.data.map((banner,i) =>(
                <SwiperSlide key={i}>
                    <img src={banner.bannerImageUrl} alt="" />
                </SwiperSlide>
            ))
        }
      </Swiper>
      </div>
    </>
  );
}