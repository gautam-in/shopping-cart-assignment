import React, { Component } from "react";
import Slider from "react-slick";

const SlickComponent = ({children, customSettings}) => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
        // ...customSettings
      };


    return ( 
        <div>
           <Slider {...settings}>
            {children}
           </Slider>
        </div>
     );
}
 
export default SlickComponent;