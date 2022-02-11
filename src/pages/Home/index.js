import React, { useEffect, useState } from "react";
import Carousel from "../../components/Carousel";
import CategoryCard from "../../components/CategoryCard";
import { getBanners, getCategories } from "../../util/commonUtil";
import "./style.scss";

function Home(props) {
  const [bannerData, setBannerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      const banners = await getBanners();
      setBannerData(banners);
      const categories = await getCategories();
      setCategoryData(categories);
      setLoading(false);
    };
    getDetails();
  }, []);

  const carouselList = () => {
    if (loading) return;
    return <Carousel list={bannerData} length={bannerData.length} />;
  };

  const categoryList = () => {
    const sortArr = [];
    categoryData.forEach((obj) => {
      sortArr[obj.order - 1] = obj;
    });

    return sortArr.map((catObj, index) => {
      const dir = index % 2 === 0 ? "left" : "right";
      return (
        <CategoryCard
          key={catObj.id}
          category={catObj}
          direction={dir}
        ></CategoryCard>
      );
    });
  };

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <main className="home__wrapper">
          {carouselList()}
          {categoryList()}
        </main>
      )}
    </>
  );
}

export default Home;
