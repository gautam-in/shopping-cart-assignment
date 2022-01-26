import React from "react";

import Slider from "react-slick";
import Image from "../../atoms/image";
import SliderArrow from "../../atoms/slider-arrow";
import useCustGetData from "../../atoms/use-custom-getdata";

import './banners-slider.scss';

const BannersSlider = () => {

    const {loading, data=[]} = useCustGetData('/banners');

    const SLIDER_SETTINGS = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        nextArrow: <SliderArrow label="PREV" />,
        prevArrow: <SliderArrow label="NEXT" />
    };

    return (
        loading ? 
        <div>Loading</div>
        : <div className="banners-slider">
            <Slider {...SLIDER_SETTINGS}>
                {
                    data.map(({bannerImageUrl, bannerImageAlt, id}) => (
                        <div key={id} className="slide">
                            <Image src={bannerImageUrl} alt={bannerImageAlt}/>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default BannersSlider;