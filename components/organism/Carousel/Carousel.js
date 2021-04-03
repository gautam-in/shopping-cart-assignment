import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import BannerItem from '../Banner/BannerItem'

export default class extends React.Component {
  render() {
  const{carouselData,styles} = this.props
    return (
      <CarouselProvider 
        infinite
        isPlaying
        naturalSlideWidth={100}
        naturalSlideHeight={30}
        totalSlides={carouselData?.length}
        >
        <ButtonBack
          className={styles.carouselback}>
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
        <div style={{display:"flex",justifyContent:'center',alignItems:"center"}}>
        <DotGroup />
        </div>
        <ButtonNext
        className={styles.carouselfront}
        >Next</ButtonNext>
      </CarouselProvider>
    );
  }
}