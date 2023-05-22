import { useQuery } from "@tanstack/react-query";

import BannerSlider from "../../components/BannerSlider";
import { CategoryType, BannerType } from "../../types";
import { fetchCategories } from "../../services/fetchCategories";
import { CategoryBanner } from "../../components/CategoryBanner";
import "./styles.scss";
import { fetchBanners } from "../../services/fetchBanners";

const Home = () => {
  const { data: categories, isLoading: isCategoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const { data: banners, isLoading: isBannersLoading } = useQuery({
    queryKey: ["banners"],
    queryFn: fetchBanners,
  });

  if (isCategoriesLoading && isBannersLoading) {
    return null;
  }

  console.log("Banners", banners);

  const sortedBanners = banners
    .filter((banner: BannerType) => banner.isActive)
    .sort((a: BannerType, b: BannerType) => a.order - b.order);
  console.log("🚀 ~ file: index.tsx:30 ~ Home ~ sortedBanners:", sortedBanners);

  const sortedCategories: CategoryType[] = categories.sort(
    (a: CategoryType, b: CategoryType) => a.order - b.order
  );

  return (
    <div className="homepage">
      <BannerSlider
        slides={sortedBanners.map((banner: BannerType) => ({
          imageUrl: banner.bannerImageUrl,
          imageAlt: banner.bannerImageAlt,
          id: banner.id,
        }))}
      />
      {sortedCategories.map(({ name, description, id, imageUrl, key }, i) => (
        <CategoryBanner
          key={id}
          name={name}
          description={description}
          imageUrl={imageUrl}
          slug={key}
          variant={i % 2 === 0 ? "left" : "right"}
          id={id}
        />
      ))}
    </div>
  );
};

export default Home;
