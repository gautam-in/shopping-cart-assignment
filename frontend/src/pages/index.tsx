import { GetServerSideProps } from "next";

import CateGoryCard from "@/components/CategoryCard";
import { Category } from "./api/categories";
import styles from "@/styles/pages/Home.module.scss";

const HomePage = ({ data }: { data: Category[] }) => {
  return (
    <section className={styles["home-section"]}>
      <ul className={styles["home-section--catergory-list"]}>
        {data?.map(({ name, description, key, id, imageUrl, order }) => (
          <li key={id}>
            <CateGoryCard
              title={name}
              description={description}
              order={order}
              imgSrc={imageUrl ?? ""}
              btnText={key}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps<{
  data: Category[];
}> = async (context) => {
  const res = await fetch("http://localhost:3000/api/categories");
  const data: Category[] = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default HomePage;
