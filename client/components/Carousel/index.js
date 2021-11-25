import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from "react-redux";

export default function CarouselComponent() {
    const banners = useSelector(state => state.banner.allBanners);
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