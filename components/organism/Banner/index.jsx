import { Component } from 'react';
import {
   Carousel,
   CarouselItem,
   CarouselControl,
   CarouselIndicators,
   CarouselCaption,
} from 'reactstrap';
import style from "./banner.module.scss";
// Next Component
class Banner extends Component {
   state = {
      activeIndex: 0,
      animating: false,
   }
   constructor(props) {
      super(props);
   }

   nextSlide = () => {
      const { activeIndex, animating } = this.state
      const { bannerItems } = this.props
      if (animating)
         return
      this.setState({
         activeIndex: activeIndex === bannerItems.length - 1 ? 0 : activeIndex + 1
      })
   }

   prevSlide = () => {
      const { activeIndex, animating } = this.state
      const { bannerItems } = this.props
      if (animating)
         return
      this.setState({
         activeIndex: activeIndex === 0 ? bannerItems.length - 1 : activeIndex - 1
      })
   }

   gotoSlideIndex = (index) => {
      const { animating } = this.state
      if (animating)
         return
      this.setState({
         activeIndex: index
      })
   }

   animatingSlide = () => {
      this.state.animating = true
   }

   animationDone = () => {
      this.state.animating = false
   }

   render() {
      const { activeIndex } = this.state
      const { bannerItems } = this.props
      return (
         <Carousel activeIndex={activeIndex}
            next={this.nextSlide}
            previous={this.prevSlide} >
            <CarouselIndicators items={bannerItems}
               activeIndex={activeIndex}
               onClickHandler={this.gotoSlideIndex}
               className={style.bannerIndicator} />
            {/* {Banner Images} */}
            {
               bannerItems && bannerItems.map((item) => {
                  return (
                     <CarouselItem key={item.id}
                        onExiting={this.animatingSlide}
                        onExited={this.animationDone} >
                        <img src={item.bannerImageUrl} alt={item.bannerImageAlt} layout='fill' />
                     </CarouselItem>
                  );
               })
            }
            <CarouselControl direction="prev" directionText="Previous"
               onClickHandler={this.prevSlide} />
            <CarouselControl direction="next" directionText="Next"
               onClickHandler={this.nextSlide} />
         </Carousel>
      )
   }
}

export default Banner;
