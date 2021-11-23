import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import axios from 'axios';

function CarouselSlider() {
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    loadBanners();
  }, []);

  const loadBanners = async () => {
    try {
      const resp = await axios.get("http://localhost:8888/banners");
      if (resp.status !== 200) {
        throw new Error('Something went wrong')
      }
      setBannerList(resp.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Carousel showThumbs={false}>
      {bannerList && bannerList.map(item => (
        <div key={item.id} style={{ boxShadow: "0px -12px 28px -28px rgb(0 0 0 / 30%)", marginBottom: '4px' }}>
          <img src={item.bannerImageUrl} alt={item.bannerImageAlt} />
        </div>
      ))}
    </Carousel>
  );
}

export default React.memo(CarouselSlider);