import React from "react";
import Slider from "react-slick";
import "./sliderComponent.scss";

export default function SliderComponent(props) {
  const { banner } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <React.Fragment>
      <Slider {...settings}>
        {banner.map((data) => (
          <div key={data.id}>
            <img src={data.bannerImageUrl} alt={data.bannerImageAlt} />
          </div>
        ))}
      </Slider>
    </React.Fragment>
  );
}
