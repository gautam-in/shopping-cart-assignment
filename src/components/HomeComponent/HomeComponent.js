import { useEffect, useState } from "react";

import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import CategoryComponent from "../../components/CategoryComponent/CategoryComponent";
import "./HomeComponent.scss";
const HomeComponent = () => {
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);
  
 

  useEffect(() => {
    const fetchBanners = async () => {
      await fetch("http://localhost:5000/banners")
        .then((response) => response.json())
        .then((data) => {
          setBanners(data);
        });
    };
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
      {banners && 
         <CarouselComponent bannerData={banners} />
      }
       

      </div>
      {categories && (
         categories.map((c) => (
          <CategoryComponent data={c} key={c.id} />
        ))
      )}
      {}
    </div>
  );
};

export default HomeComponent;