import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import offer1 from '../../static/images/offers/offer1.jpg';
import offer2 from '../../static/images/offers/offer2.jpg';
import offer3 from '../../static/images/offers/offer3.jpg';

const HomeCarousel = () => {
    return (
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
    );
}

export default HomeCarousel;