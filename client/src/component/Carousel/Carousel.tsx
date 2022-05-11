import { Carousel } from "react-responsive-carousel";
import { BannerType } from "../../type";

export interface ImageProps{
  image?: BannerType[]
}
const CarouselComponent = ({ image }:ImageProps) => {
  return (
    <Carousel autoPlay showThumbs={false} infiniteLoop={true}>
        {image && image.map((img : BannerType,index:any)=>{
           return( <div key={index}>
            <img alt="" src={img.bannerImageUrl} />
          </div>)
        })}
    </Carousel>
  );
};

export default CarouselComponent