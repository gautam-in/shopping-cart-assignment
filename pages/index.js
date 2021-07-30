import Categories from "../Component/Categories";
import { GET } from "../Lib/helper";
import { BannerPath, CategoriesPath } from "../constant/index";
import Banner from "../Component/Banner";
export const getStaticProps = async () => {
  const banners = await GET(BannerPath);
  const categories = await GET(CategoriesPath);
  return {
    props: { banners, categories },
  };
};
const landingPage = ({ banners, categories }) => {
  console.log(banners, categories, 'banners')
  return (
    <main>
      <Banner banners={banners} />
      <Categories categories={categories} />
    </main>
  );
};

export default landingPage;
