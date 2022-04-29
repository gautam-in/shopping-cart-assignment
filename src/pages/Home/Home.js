import BannerCarousel from "../../components/Carousel/BannerCarousel";
import { useEffect, useState } from "react";
import Category from "../../components/Category/Category";
import "./Home.scss";
const Home = () => {
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchBanners = async () =>
      await fetch("http://localhost:5000/banners")
        .then((response) => response.json())
        .then((data) => {
          //console.log("Banners= ", data);
          setBanners(data);
        });
    fetchBanners();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      await fetch("http://localhost:5000/categories")
        .then((response) => response.json())
        .then((data) => {
          //console.log("Categories= ", data);
          const filteredCategories = data
            .sort((a, b) => a.order - b.order)
            .filter((c) => c.imageUrl !== undefined);
          setCategories(filteredCategories);
        });
    };
    fetchCategories();
  }, []);
  return (
    <div className="home-container">
      <div className="shadow bottom">
        <BannerCarousel bannerData={banners} />
      </div>
      {categories.map((c) => (
        <Category data={c} key={c.id} />
      ))}
    </div>
  );
};

export default Home;
