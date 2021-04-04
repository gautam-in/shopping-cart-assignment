import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import BannerItem from '../Banner/BannerItem'
import styles from './carousel.module.scss'

export default class extends React.Component {
  render() {
  const{carouselData} = this.props
    return (
      <CarouselProvider 
        infinite
        isPlaying
        naturalSlideWidth={100}
        naturalSlideHeight={30}
        totalSlides={carouselData?.length}
        >
        <ButtonBack
          className={styles.prevbutton}>
          Back
        </ButtonBack>
        <Slider>
        {carouselData?.length && carouselData.map((bannerItem,i)=>{
                return (
                <Slide index={i}>
                    <BannerItem key={bannerItem.id} bannerItem={bannerItem} />
                </Slide>)
            })}
        </Slider>
        <div className={styles.dots}>
        <DotGroup />
        </div>
        <ButtonNext
        className={styles.nextbutton}
        >Next</ButtonNext>
      </CarouselProvider>
    );
  }
}