import React, { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Banner } from '../../services/AppService';
import './index.scss';

interface BannerProps {
    banners: Banner[];
}

const Banners: FC<BannerProps> = ({ banners }) => {
    const settings = {
        showThumbs: false,
        autoPlay: true,
        infiniteLoop: true,
        autoFocus: true,
    };

    return (
        <Carousel {...settings}>
            {banners.map((banner) => (
                <div key={banner.id}>
                    <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
                </div>
            ))}
        </Carousel>
    );
};

export default Banners;
