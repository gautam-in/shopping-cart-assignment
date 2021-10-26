import styles from "../styles/Home.module.css";
import Homecard from "../components/common/Homecard";

export default function Home({ categorydata }) {
  categorydata.sort((a, b) => {
    if (a.order < b.order) return -1;
    return a.order > b.order ? 1 : 0;
  });
  return (
    <div className={styles.OuterContainer}>
      <h1>Banners</h1>
      {categorydata.map((item) => {
        return (
          <>
            <Homecard key={item.id} item={item} />
            <div className={styles.homeCardBorder}></div>
          </>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const category_response = await fetch("http://localhost:3000/api/category");
  const category_data = await category_response.json();
  const banners_response = await fetch("http://localhost:3000/api/banners");
  const banners_data = await banners_response.json();
  return {
    props: {
      categorydata: category_data,
      bannersdata: banners_data,
    },
  };
}
