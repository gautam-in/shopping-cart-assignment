import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import offer1 from '../../static/images/offers/offer1.jpg';
import offer2 from '../../static/images/offers/offer2.jpg';
import offer3 from '../../static/images/offers/offer3.jpg';

import './home-carousel.scss';

const HomeCarousel = () => {
    return (
        <div className="home-carousel__container">
            <Carousel 
            infiniteLoop
            autoPlay
            showThumbs={false}
            interval={2000}>
                <div>
                    <img src={offer1} />
                </div>
                <div>
                    <img src={offer2} />
                </div>
                <div>
                    <img src={offer3} />
                </div>
            </Carousel>
        </div>
    );
}

export default HomeCarousel;