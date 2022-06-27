import React from "react"
import axios from "axios"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    const [banners, setBanners] = React.useState([])

    React.useEffect(() => {
        const process = async () => {
            const response = await axios.get("http://localhost:4000/banners")
            setBanners(response.data)

        }


        process()
    }, [])
    return (<div className="carousel_container">
        <Carousel  showThumbs={false} swipeable 
        autoPlay
        useKeyboardArrows
        transitionTime={1000}
         infiniteLoop>
            {banners && banners.map((banner) => {
                return (

                    <div key={banner.id}>
                        <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt}/>
                    </div>



                )
            })}
        </Carousel>
    </div>)
}


export default Banner


