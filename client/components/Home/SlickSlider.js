import React from 'react';
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import Slider from "react-slick";


const SlickSlider = ({banners}) => {
    const settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            {banners && banners.map((banner, i) =>
                <div className={styles.bannerDiv} key={banner?._id}>
                    <Image src={'http:localhost:5000' +banner.bannerImageUrl} layout='fill' alt={banner.bannerImageAlt} priority={i === 0} />
                </div>)}

        </Slider>
    );
};

export default SlickSlider;