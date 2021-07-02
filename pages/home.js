import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBanners, fetchCategories } from "../redux/actions";
import Banner from "../components/molecules/Banner";
import Categories from "../components/organism/Categories";

function home({ banners, fetchBanners, categories, fetchCategories }) {
  useEffect(() => {
    (async () => {
      await fetchBanners();
      await fetchCategories();
    })();
  }, []);

  return (
    <main>
      <Banner banners={banners} />
      <Categories categories={categories} />
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    banners: state.categories.banners,
    categories: state.categories.categories,
  };
};
export default connect(mapStateToProps, { fetchBanners, fetchCategories })(
  home
);
