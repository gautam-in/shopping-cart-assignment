import Link from "next/link";
import Carousel from "nuka-carousel/lib/carousel";
import FillImage from "../image/FillImage";

export default function CarouselSlides({ carouselData }: any) {
  const renderBanners = () => (
    <Link href="/products">
      <Carousel autoplay wrapAround adaptiveHeight>
        {carouselData?.map((banner: any, index: any) => (
          <div className="imgwrapper" key={banner.id}>
            <FillImage
              priority={index === 0}
              src={banner.bannerImageUrl}
              alt={banner.bannerImageAlt}
            />
          </div>
        ))}
      </Carousel>
    </Link>
  );

  return (
    <section>
      <div className="banners">{renderBanners()}</div>
    </section>
  );
}
