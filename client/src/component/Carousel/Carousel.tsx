import { Carousel } from "react-responsive-carousel";

const CarouselComponent = ({ image }:any) => {
  return (
    <Carousel autoPlay showThumbs={false} infiniteLoop={true}>
        {image.map((img : any,index:any)=>{
           return( <div key={index}>
            <img alt="" src={img.bannerImageUrl} />
          </div>)
        })}
    </Carousel>
  );
};

export default CarouselComponent