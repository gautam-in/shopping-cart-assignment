import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBanners } from "../../redux/actions/banners.action";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function BannerCarousel() {
  const dispatch = useDispatch();
  const bannersList = useSelector((state) => state.banner.banners);
  useEffect(() => {
    dispatch(getAllBanners());
  }, []);

  console.log(bannersList);

  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      {bannersList.map((banner) => (
        <div>
          <img src={banner.bannerImageUrl} />
        </div>
      ))}
    </Carousel>
  );
}
