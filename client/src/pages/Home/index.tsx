import { useQuery } from "@tanstack/react-query";
import { HeadProvider, Title, Link, Meta } from "react-head";

import BannerSlider from "../../components/BannerSlider";
import CategoryBanner from "../../components/CategoryBanner";

import { fetchCategories } from "../../services/fetchCategories";
import { fetchBanners } from "../../services/fetchBanners";

import { CategoryType, BannerType } from "../../types";
import "./styles.scss";

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

  const sortedBanners =
    (banners &&
      banners
        .filter((banner: BannerType) => banner.isActive)
        .sort((a: BannerType, b: BannerType) => a.order - b.order)) ||
    [];

  const sortedCategories: CategoryType[] =
    (categories &&
      categories.sort(
        (a: CategoryType, b: CategoryType) => a.order - b.order
      )) ||
    [];

  return (
    <div className="homepage">
      <HeadProvider>
        <Title>Home - Sabka Bazaar</Title>
        <Meta
          name="description"
          content="Home page | Latest offers and explore all categories"
        />
        <Link
          rel="preload"
          href={(sortedBanners.length && sortedBanners[0].bannerImageUrl) || ""}
          as="image"
        />
        <Link
          rel="preload"
          href={(sortedCategories.length && sortedCategories[0].imageUrl) || ""}
          as="image"
        />
      </HeadProvider>
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
