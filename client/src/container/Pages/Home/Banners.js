import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useBanners } from '../../../hooks/queries';

export default function Banners() {
    const { data: banners } = useBanners()
  return (
    <Carousel className='mt-[1px]'
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop
        ariaLabel='Offers Carousal'
    >
        {
            banners?.map(item => {
                return (
                    <div key={item?.id}>
                        <img loading='lazy' src={item?.bannerImageUrl} alt={item.bannerImageAlt} />
                    </div>
                )
            })
        }
    
    </Carousel>
  )
}
