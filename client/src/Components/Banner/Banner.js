import React, {useEffect, useState} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import './Banner.css'

const Banner = () => {
    const [carouseldata, setCarouselData] = useState(null)
    useEffect(()=>{
        const data = async () => {
           const response= await fetch('http://localhost:8080/banners')
           const responseJson = await response.json()
           await setCarouselData(responseJson)
        }
        data()
    },[])
    return (
        <div className='bannerContainer'>
        <Carousel  
        showArrows
        showThumbs={false}
        infiniteLoop
        dynamicHeight
        >
            {carouseldata && carouseldata.map(item => <div>
            <img src={item.bannerImageUrl} alt={item.bannerImageAlt}/>
            </div>)}
        </Carousel>
        </div>
    )
}

export default Banner