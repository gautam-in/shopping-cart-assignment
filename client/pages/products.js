import axios from "../axios.config";
import ProductsPage from "../components/organisms/ProductsPage";
import { FETCH_CATEGORIES, FETCH_PRODUCTS } from "../global/services";
import { getDeviceType } from "../global/utils";

export async function getServerSideProps(context) {
  const userAgent = context.req.headers["user-agent"];
  const deviceType = getDeviceType(userAgent);
  const [productsResponse, categoriesResponse] = await Promise.all([
    axios.get(FETCH_PRODUCTS),
    axios.get(FETCH_CATEGORIES),
  ]);
  const { data: categoriesList } = categoriesResponse;
  const { data: productsList } = productsResponse;
  return {
    props: { categoriesList, productsList, deviceType },
  };
}

const ProductPage = ({ categoriesList, productsList, deviceType }) => {
  return (
    <ProductsPage
      deviceType={deviceType}
      productsList={productsList}
      categoriesList={categoriesList}
    />
  );
};

export default ProductPage;
