import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Banner } from './Banner';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export default function BannerCarusal() {
    const [bannerList, setBannerList] = useState('')

    useEffect(() => {
        axios.get("http://localhost:5000/banners")
        .then((response) => {
          setBannerList(response.data)
        })
        .catch(err => console.error(err));
      }, [])


    return (
        <Carousel>
            {bannerList && bannerList.map(item => {
             return <Banner key={item.id} item={item} />
          } )}   
        </Carousel>
    )
}
