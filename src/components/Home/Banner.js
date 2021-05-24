import { memo } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "./CarouselItem";
// import { Container } from "./Banner.styles";

const Banner = ({ data }) => {
  console.log({ data });
  return (
    <Carousel className="banner-top" showStatus={false} showThumbs={false}>
      {data.map((item) => (
        <CarouselItem key={item.id} item={item} />
      ))}
    </Carousel>
  );
};

export default memo(Banner);
