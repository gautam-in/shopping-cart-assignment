import { useEffect, useContext, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { isEmpty } from "lodash";
import SEO from "../../seo/SEO";
import CarouselComponent from "../../components/Carousel/Carousel";
import Categories from "../../containers/Categories/Categories";
import CategoriesContext from "../../store/Categories/Context";
import CarouselContext from "../../store/Carousel/Context";
import { ROUTES } from "../../constants";

function Home() {
  const history = useHistory()

  const categoriesContext = useContext(CategoriesContext);
  const carouselContext = useContext(CarouselContext);

  const { categories, getCategories,setCategoryId } = categoriesContext;
  const { carousel, getCarouselData } = carouselContext;

  useEffect(() => {
    if(isEmpty(categories)){
      getCategories();
    }
    if(isEmpty(carousel)){
      getCarouselData()
    }
  }, []);

  const handleCategoryClick = (id) => {
      setCategoryId(id)
      history.push(ROUTES.PRODUCTS)
  }
  return (
    <Fragment>
      <SEO title="Sabka Bazaar" content="Sabka Bazaar is a online grocery platform, where you can buy in a affordable rate" link="/"/>
      <div>
        {!isEmpty(carousel) && <CarouselComponent data={carousel}/>}
        {!isEmpty(categories) && <Categories data={categories}  handleCategoryClick={handleCategoryClick}/>}
      </div>
    </Fragment>
  );
}

Home.whyDidYouRender= true;

export default Home;
