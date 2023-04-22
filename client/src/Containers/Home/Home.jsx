import { lazy } from "react";
import useFetch from '../../utils/hooks/useFetch';
import {domain} from '../../utils/Constants';
import Loader from '../../Components/Common/Loader/Loader';

const CategoryBanner = lazy(() => import("../../Components/Banner/CategoryBanner"));
const ProductCarousel = lazy(() => import("../../Components/Common/Carousel/Slider"));
const Header = lazy(() => import("../../Components/Common/Header/Header"));
const Home = () => {
  const {data:banners, loading:bannersLoading} = useFetch(`${domain}/banners`);
  const {data:categories, loading:categoriesLoading} = useFetch(`${domain}/categories`);
  const activeCategories = categories?.filter((category) => category.enabled) || [];

  return (
    <>
      <Header />
      <section className="pageSection">
        {banners && <ProductCarousel items={banners} />}
        {activeCategories.map((category,idx) => (
            <CategoryBanner key={category.key} category={category} index={idx} />
        ))}
      </section>
      {(bannersLoading || categoriesLoading ) && <Loader />}
    </>
  );
};

export default Home;