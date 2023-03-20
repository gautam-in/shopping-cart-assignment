import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Carousel from 'nuka-carousel';
import './carousal.scss'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Carousal = () => {

      const[banner,setBanner]=useState([]);
      useEffect(()=>{
        const fetchBanner=async()=>{
           const response=await axios.get('http://localhost:5000/banners');
          
           setBanner(response.data)
        }
        fetchBanner()
      },[])

     
        const params={
          autoplay:true,
          slidesToShow:1,
          
        // //  dragThreshold:1,
        // slideWidth:1024,
        // width:100,
        // speed:200,
        // cellSpacing:100,
        
          // cellAlign:'center',
        //   defaultControlsConfig:{
        //     'prev-cloned':'prev-cloned'
        //   }
        }
    
          
        
     
      
     
  return (
  
 
   
     
      <section className='carousel__container'>
     
        <Carousel {...params}>
            {banner?.map((banner) => {
              return <img key={banner.id} style={{'width':'100%','height':'250px','objectFit':'fill','padding':'20px'}} src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />;
            })}
         </Carousel> 
     
        {/* <div style={{'width':'100%'}}>
        <Swiper
      spaceBetween={100}
      slidesPerView={1}
      cssMode={true}
      navigation={true}
      loop
      mousewheel={true}
      keyboard={true}
      // modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
      pagination={{ clickable: true }}
    >
      {banner?.map((banner) => {
              return <img key={banner.id} style={{'width':'100%','height':'200px'}} src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />;
            })}
        </Swiper>    
        </div> */}
      </section>
   
  )
}

export default Carousal