import axios from "../axios.config";
import ProductList from "../components/molecules/ProductList";
import { FETCH_PRODUCTS } from "../global/services";

export async function getServerSideProps() {
  const { data } = await axios.get(FETCH_PRODUCTS);
  return {
    props: { data },
  };
}

const ProductPage = ({ data }) => {
  console.log({ data });
  return <ProductList productsList={data} />;
};

export default ProductPage;
