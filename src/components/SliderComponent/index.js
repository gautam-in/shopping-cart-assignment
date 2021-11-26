import Slider from "react-slick";

import "./sliderComponent.scss";

const SliderComponent = ({ sliderData }) => {
  const settings = {
    infinite: true,
    dots: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
  };

  return (
    <>
      <Slider {...settings}>
        {sliderData.map((data) => (
          <div key={data.id}>
            <img src={data.bannerImageUrl} alt={data.bannerImageAlt} />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SliderComponent;
