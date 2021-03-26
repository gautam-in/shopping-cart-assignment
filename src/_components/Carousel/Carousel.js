import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import { BannerData } from '../../_services/server/banners';
import './style.scss';

export default class CarouselComp extends Component {

  render () {
    return (
      <div className='carouselStyle'>
        <Carousel>
         {BannerData.map(slide => <img src={slide.bannerImageUrl} alt={slide.bannerImageAlt} height='100%' width='70%' />)}
      </Carousel>
      </div>
    )
  }
}
