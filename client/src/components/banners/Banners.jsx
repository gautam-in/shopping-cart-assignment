import queryData from "@/src/utils/queryData";
import Image from "next/image";
import Carousel from "nuka-carousel/lib/carousel";
import { useQuery } from "react-query";
import styles from "./Banners.module.scss";

export default function Banners() {
  const { data: banners } = useQuery({
    queryKey: ["banners"],
    queryFn: queryData,
  });

  const renderBanners = () => (
    <Carousel autoplay wrapAround adaptiveHeight>
      {banners?.map((banner) => (
        <div className={styles.imgwrapper} key={banner.id}>
          <Image src={banner.bannerImageUrl} alt={banner.bannerImageAlt} fill />
        </div>
      ))}
    </Carousel>
  );

  return (
    <section>
      <div className={styles.banners}>{renderBanners()}</div>
    </section>
  );
}
