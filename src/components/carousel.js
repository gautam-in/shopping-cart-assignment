import React, { useState, useEffect} from 'react';
import Carousel from 'nuka-carousel';
import BannerData from '../server/banners/index';
import '../styles/carousel.scss';
const HomeCarousel = () => {
   const [bannerData, setBannerData]= useState([]);
   useEffect(() => {
    setBannerData(BannerData);
      
   }, []);

   const params ={
    autoplay:true,
    slideToShow:1
   }
    return(
        <>
        <section className='carousel-container'>
         <Carousel {...params} >
            {bannerData && bannerData.map((item) => {
                return(
                <div key={item.id}>
                <img src={item.bannerImageUrl} alt={item.bannerImageAlt}/>
                </div>
                )
            })}
         </Carousel>
         </section>
        </>
    )
}

export default HomeCarousel;