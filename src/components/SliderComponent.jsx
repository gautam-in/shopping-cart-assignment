import React from "react";
import Slider from "react-slick";
import "./SliderComponent.css";
function SliderComponent(props) {
  const { banner } = props;

  var settings = {
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

export default SliderComponent;
