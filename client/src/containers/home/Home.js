import React, { lazy, useEffect } from "react";
import useFetch from '../../utils/hooks/useFetch';



const CategoryTile = lazy(() => import("../../components/tiles/category/Category"));
const LedeCarousel = lazy(() => import("../../components/carousel/LedeCarousel"));
const Header = lazy(() => import("../../components/header/Header"));
const Home = () => {
  const {data:banners, loading:bannersLoading, error:bannersError} = useFetch('http://localhost:8080/banners');
  const {data:categories, loading:categoriesLoading, error:categoriesError} = useFetch('http://localhost:8080/categories');

  return (
    <>
      <Header />
      <section className="pageSection">
        {banners && <LedeCarousel items={banners} />}
        {categories && categories.map((category,index) => {
          if(category.enabled)
          {
            return (<CategoryTile key={category.key} category={category} index={index} />);
          }
          else{
            return false;
          }
          
        })}
      </section>
    </>
  );
};

export default Home;