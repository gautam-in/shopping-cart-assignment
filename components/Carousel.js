import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import BannerItem from './BannerItem'

export default class extends React.Component {
  render() {
  const{carouselData } = this.props
    return (
      <CarouselProvider 
        infinite
        isPlaying
        naturalSlideWidth={100}
        naturalSlideHeight={30}
        totalSlides={carouselData?.length}
        >
        <ButtonBack
        style={{position:"absolute",width:100,height:50,zIndex:2,top:"15%",background:"rgba(0,0,0,0.4)",fontSize:16,border:"none"}}>Back</ButtonBack>
        <Slider>
        {carouselData?.length && carouselData.map((bannerItem,i)=>{
                return (
                <Slide index={i}>
                    <BannerItem key={bannerItem.id} bannerItem={bannerItem} />
                </Slide>)
            })}
        </Slider>
        <DotGroup />
        <ButtonNext
        style={{position:"absolute",width:100,height:50,zIndex:2,top:"15%",background:"rgba(0,0,0,0.4)",fontSize:16,border:"none",left:"80%"}}>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}