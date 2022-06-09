import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import './Banner.css';

function Banner() {
    const [banners, setBanners] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/banners').then((response) => {
            setBanners(response.data)
        })
    }, [])
    return (
        <div className='banner'>
            <Carousel className='container' showThumbs={false}>
                {
                    banners && banners.map((banner, index) => {
                        return (
                            <div key={index}>
                                <img src={banner.bannerImageUrl} />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Banner
