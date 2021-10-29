import { useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const BANNER_STYLE = styled.div`
    max-width: 100%;
    box-shadow: 0px 15px 10px -20px #111;

`
export default function Banner(){
    const banners = useSelector(state => state.bannerReducer.banners);
    return(
        <BANNER_STYLE>
            <Carousel showThumbs={false} autoPlay={true} interval={3000} showStatus={false} infiniteLoop={true}>
                {
                    banners && banners.map((banner)=>{
                        return(
                            <img src={banner.bannerImageUrl} key={banner.id} alt={banner.bannerImageAlt}/>
                        )
                    })
                }
            </Carousel>
        </BANNER_STYLE>
    )
}