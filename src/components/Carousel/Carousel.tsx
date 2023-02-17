import { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import { getBanners, TBanner } from "../../apis/banners";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Carousel() {
  const [banners, setBanner] = useState<TBanner[]>([]);

  useEffect(() => {
    getBanners().then((res) => setBanner(res));
  }, []);

  const filteredBanners = useMemo(() => {
    return banners.filter((banner) => banner.isActive);
  }, [banners]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings}>
      {filteredBanners?.map((banner) => (
        <div key={banner.id}>
          <Image
            src={banner.bannerImageUrl}
            alt={banner.bannerImageAlt}
            height={300}
            width={1200}
            loading="lazy"
          />
        </div>
      ))}
    </Slider>
  );
}

type ArrowProps = Partial<{ onClick: any }>;
function NextArrow(props: ArrowProps) {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 bg-black/40 p-2 text-white z-10 right-0"
      onClick={onClick}
    >
      NEXT
    </button>
  );
}

function PrevArrow(props: ArrowProps) {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2  bg-black/40 p-2 text-white z-10"
      onClick={onClick}
    >
      PREV
    </button>
  );
}
