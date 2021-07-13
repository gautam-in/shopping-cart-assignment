import { GET } from "../Utils/helper";
import { BannerPath, CategoriesPath } from "../constant/index";
import dynamic from "next/dynamic";
const Banner = dynamic(() => import("../components/molecules/Banner"));
const Categories = dynamic(() => import("../components/organism/Categories"));
function home({ banners, categories }) {
  return (
    <main>
      <Banner banners={banners} />
      <Categories categories={categories} />
    </main>
  );
}

export const getStaticProps = async () => {
  const banners = await GET(BannerPath);
  const categories = await GET(CategoriesPath);
  return {
    props: { banners, categories },
  };
};
export default home;
