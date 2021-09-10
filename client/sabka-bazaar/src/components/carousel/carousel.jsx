import React from "react";
import Slider from "react-slick";
import './carousel.scss'

const Carousel = ({offerBanners}) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false
    };
    return (
        <Slider {...settings}>
            {offerBanners.filter(item=>item.isActive).map((ele) => (
                <div key={ele.id}>
                    <img className='img' src={ele?.bannerImageUrl} alt={ele?.bannerImageAlt} />
                </div>
            ))}
        </Slider>
    );
}
export default Carousel;