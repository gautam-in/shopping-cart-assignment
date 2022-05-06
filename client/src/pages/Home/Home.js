import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { isEmpty } from "lodash";
import CarouselComponent from "../../components/Carousel/Carousel";
import Categories from "../../containers/Categories/Categories";
import CategoriesContext from "../../store/Categories/Context";
import CarouselContext from "../../store/Carousel/Context";
import Layout from "../../layout/Layout";

function Home() {
  const history = useHistory()

  const categoriesContext = useContext(CategoriesContext);
  const carouselContext = useContext(CarouselContext);

  const { categories, getCategoriesData,setCategoryId } = categoriesContext;
  const { carousel, getCarouselData } = carouselContext;

  const [carouselData, setCarouselData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    if(isEmpty(categories)){
      getCategoriesData();
    }
    if(isEmpty(carousel)){
      getCarouselData()
    }
  }, []);

  useEffect(() => {
    if (!isEmpty(categories)) {
      setCategoriesData(categories);
    }
    if(!isEmpty(carousel)){
      setCarouselData(carousel)
    }
  }, [categories,carousel]);

  const handleCategoryClick = (id) => {
      setCategoryId(id)
      history.push('/products')
  }
  return (
    <Layout>
      <div>
        {!isEmpty(carouselData) && <CarouselComponent data={carouselData}/>}
        {!isEmpty(categoriesData) && <Categories data={categoriesData}  handleCategoryClick={handleCategoryClick}/>}
      </div>
    </Layout>
  );
}

export default Home;
