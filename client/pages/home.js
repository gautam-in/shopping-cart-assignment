import axios from "../axios.config";
import CategoryList from "../components/molecules/CategoryList";
import { FETCH_CATEGORIES } from "../global/services";

export async function getServerSideProps() {
  const { data } = await axios.get(FETCH_CATEGORIES);
  return {
    props: { data },
  };
}

export default function Home({ data }) {
  console.log(data);
  if (!data) return null;
  return (
    <div>
      <CategoryList categories={data} />
    </div>
  );
}
