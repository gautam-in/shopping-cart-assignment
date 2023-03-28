import { GetServerSideProps } from "next";

import CateGoryCard from "@/components/CategoryCard";
import { Category } from "./api/categories";
import styles from "@/styles/pages/Home.module.scss";
import OfferCarousel from "@/components/OfferCarousel";
import { Offer } from "./api/offers";

const HomePage = ({
  categoriesData,
  offerListData,
}: {
  categoriesData: Category[];
  offerListData: Offer[];
}) => {
  return (
    <section className={styles["home-section"]}>
      <OfferCarousel data={offerListData} />
      <ul className={styles["home-section--catergory-list"]}>
        {categoriesData?.map(
          ({ name, description, key, id, imageUrl, order }) => (
            <li key={id}>
              <CateGoryCard
                title={name}
                description={description}
                order={order}
                imgSrc={imageUrl ?? ""}
                btnText={key}
              />
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps<{
  categoriesData: Category[];
  offerListData: Offer[];
}> = async () => {
  const resCategoriesPromise = fetch(
    "http://localhost:3000/api/categories"
  ).then((res) => res.json());
  const resOffersPromise = fetch("http://localhost:3000/api/offers").then(
    (res) => res.json()
  );
  const [categoriesData, offerListData] = await Promise.all([
    resCategoriesPromise,
    resOffersPromise,
  ]);

  return {
    props: {
      categoriesData,
      offerListData,
    },
  };
};

export default HomePage;
