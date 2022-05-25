import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getBanners} from '../../redux/actionCreators/dataActionCreators';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Slideshow() {
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
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
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