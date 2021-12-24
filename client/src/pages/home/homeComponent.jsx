import Carousel from '../../components/molecules/carousel/carousel';
import ProductCategoryBanner from '../../components/organisms/productCategoryBanner/productCategoryBanner';

function HomeComponent(props) {
  const { bannerData, categoriesData } = props;
  return (
    <>
    <h1 className="d-none">Home</h1>
      <div className="mb-5">
        <Carousel bannerData={bannerData} />
      </div>
      <div className="mb-2">
        <ProductCategoryBanner categoriesData={categoriesData} />
      </div>
    </>
  );
}

export default HomeComponent;
