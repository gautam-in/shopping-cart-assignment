import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {
    return (
        <Carousel>
                <div>
                    <img src="static/images/offers/offer1.jpg" />
                </div>
                <div>
                    <img src="static/images/offers/offer2.jpg" />
                </div>
                <div>
                    <img src="static/images/offers/offer3.jpg" />
                </div>
                <div>
                    <img src="static/images/offers/offer4.jpg" />
                </div>
                <div>
                    <img src="static/images/offers/offer5.jpg" />
                </div>
            </Carousel>
    )
}