import React from 'react'
import {useHistory } from "react-router-dom"
import Slider from "react-slick";
import "../../styles/slick.scss";
import "../../styles/slick-theme.scss";

import * as Endpoints from '../Endpoints'

const SlickSlider = ({banners}) => {
    const history = useHistory();
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: true,
        className: "slides"
    }
    return(
        <section className="slider_sec">
            <div className="slider_container">
                <div className="vertical-center-4 slider">
                    <Slider {...settings} >
                        {
                            banners.map((banner)=>{
                                return(
                                    <div key={banner.id}>
                                        <img src={Endpoints.base_uri+banner.bannerImageUrl} alt={banner.bannerImageAlt} />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default SlickSlider;