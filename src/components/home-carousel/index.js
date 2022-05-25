import { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BannersContext } from "../../contexts/banners.context";

import './home-carousel.scss';

const HomeCarousel = () => {
    const {banners} = useContext(BannersContext);
    return (
        <div className="home-carousel__container">
            <Carousel 
            infiniteLoop
            autoPlay
            showThumbs={false}
            interval={2000}>
                {banners.map((banner) => <div key={banner.id} order={banner.order}>
                    <img src={require(`../../../src${banner.bannerImageUrl}`)} alt={banner.bannerImageAlt}/>
                </div>)}
            </Carousel>
        </div>
    );
}

export default HomeCarousel;