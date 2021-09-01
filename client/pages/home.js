import axios from "../axios.config";
import HomePage from "../components/organisms/HomePage";
import { FETCH_CATEGORIES, FETCH_BANNERS } from "../global/services";

export async function getServerSideProps() {
  const [bannersResponse, categoriesResponse] = await Promise.all([
    axios.get(FETCH_BANNERS),
    axios.get(FETCH_CATEGORIES),
  ]);
  const { data: carouselData } = bannersResponse;
  const { data: categoriesList } = categoriesResponse;
  return {
    props: { carouselData, categoriesList },
  };
}

export default function Home({ carouselData, categoriesList }) {
  if (!categoriesList?.length) return null;
  return (
    <HomePage categoriesList={categoriesList} carouselData={carouselData} />
  );
}
