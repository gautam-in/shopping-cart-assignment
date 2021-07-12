import Banner from "../components/molecules/Banner";
import Categories from "../components/organism/Categories";
import { GET } from "../Utils/helper";
import { BannerPath, CategoriesPath } from "../constant/index";

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
