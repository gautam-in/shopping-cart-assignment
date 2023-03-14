import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const LedeCarousel = ({items}) => {
  return ( 
    <section>
        <Carousel 
            showThumbs={false}
            swipeable={true}
        >
            {items.map(item => {
                return(
                    <div>
                        <img src={item.bannerImageUrl} />
                    </div>
                )
            })}
        </Carousel>
    </section>
  )
}
export default LedeCarousel;