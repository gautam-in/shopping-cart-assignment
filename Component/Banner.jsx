import Slider from "react-slick";
import { SlickArrowStyle, SliderContainer } from "./styles/BannerStyles";
import { Placeholder } from "../constant/index";
import Image from "next/image";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}
const settings = {
  dots: true,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SampleNextArrow />,
};

function Banner({ banners }) {
  if (!banners.length)
    return (
      <Image src={Placeholder} width={1100} height={305} alt="placeholder" />
    );
  return (
    <SliderContainer>
      <Slider {...settings}>
        {banners.map((banner) => (
          <Image
            key={banner.id}
            src={banner.bannerImageUrl}
            alt={banner.bannerImageAlt}
            loading="lazy"
            width={1100}
            height={305}
          />
        ))}
      </Slider>
    </SliderContainer>
  );
}

export default Banner;
