import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../component/Carousel";
import BannerCards from "../component/BannerCards";
import "../styles/home.scss";
import { fetchCaregoriesStart } from "../store/slices/categories/categories.action";
import { selectCategories } from "../store/slices/categories/categories.selector";

const Banner = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCaregoriesStart());
  }, [dispatch]);

  return (
    <div className="home">
      <Carousel />
      <div>
        {categoryList
          ?.filter((category) => category.enabled === true)
          ?.map((category) => (
            <BannerCards key={category.id} category={category} />
          ))}
      </div>
    </div>
  );
};

export default Banner;
