import React from 'react';
import Slider from 'react-slick';

import useFetch from '../../hooks/useFetch';

import './Carousel.scss';

const Carousel = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
      
  const [data, loading,error] = useFetch('../server/banners/index.get.json');
      

  return (
    <Slider {...settings}>
      {data && data.map(({id, bannerImageUrl, bannerImageAlt}) => (<div key={id}> 
        <img src={bannerImageUrl} alt={bannerImageAlt} />
      </div>))}
    </Slider>
  );
};

export default Carousel;