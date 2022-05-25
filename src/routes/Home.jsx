import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../component/Carousel";
import BannerCards from "../component/BannerCards";
import "../styles/home.scss";

const Banner = () => {
  const [categoryList, setCategoryList] = useState([]);

  const getCategoryList = async () => {
    let newCategoryList = await axios.get("http://localhost:8000/categories");
    setCategoryList(newCategoryList.data);
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div className="home">
      <Carousel />
      <div>
        {categoryList
          .filter((category) => category.enabled === true)
          .map((category) => (
            <BannerCards key={category.id} category={category} />
          ))}
      </div>
    </div>
  );
};

export default Banner;
