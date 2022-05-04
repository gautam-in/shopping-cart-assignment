import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.scss';

const Banner = ({ sliderData }) => {
    const settings = {
        showThumbs: false,
        autoPlay: true,
        infiniteLoop: true,
        autoFocus: true,
    };

    return (
        <Carousel {...settings}>
            {sliderData.map((data) => (
                <div key={data.id}>
                    <img src={data.bannerImageUrl} alt={data.bannerImageAlt} />
                </div>
            ))}
        </Carousel>
    );
};

export default Banner;
