import queryData from "@/src/utils/queryData";
import Link from "next/link";
import Carousel from "nuka-carousel/lib/carousel";
import { useQuery } from "react-query";
import FillImage from "../image/FillImage";
import styles from "./Banners.module.scss";

export default function Banners() {
  const { data: banners } = useQuery({
    queryKey: ["banners"],
    queryFn: queryData,
  });

  const renderBanners = () => (
    <Link href="/products">
      <Carousel autoplay wrapAround adaptiveHeight>
        {banners?.map((banner, index) => (
          <div className={styles.imgwrapper} key={banner.id}>
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
      <div className={styles.banners}>{renderBanners()}</div>
    </section>
  );
}
