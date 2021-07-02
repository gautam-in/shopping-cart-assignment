
import Slider from "react-slick";
import {SlickArrowStyle,SliderContainer} from "../styles/BannerStyles"

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    autoplay:true,
    nextArrow:<SlickArrowStyle />,
    prevArrow:<SlickArrowStyle />
  };

 const renderBanner = (banners) =>{
     return banners.map(banner =>{
        return(
        <img key={banner.id} src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
        )
     })
 } 

 function Banner({banners}){
     if(banners){
     return (
         <SliderContainer>
         <Slider {...settings}>
             {renderBanner(banners)}
         </Slider>
         </SliderContainer>
     )
     }
     else{
         return<div>loading...</div>
     } 
 }

export default Banner