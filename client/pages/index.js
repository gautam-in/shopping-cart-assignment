import styles from "../styles/Home.module.css";
import Homecard from "../components/common/Homecard";
import { CustomCarousel } from "../components/carousel/carousel";

export default function Home({ bannersdata, categorydata }) {
  categorydata.sort((a, b) => {
    if (a.order < b.order) return -1;
    return a.order > b.order ? 1 : 0;
  });
  return (
    <div className={styles.OuterContainer}>
      <CustomCarousel data={bannersdata} />
      {categorydata.map((item) => {
        return (
          <div key={item.id}>
            <Homecard item={item} />
            <div className={styles.homeCardBorder}></div>
          </div>
        );
      })}
    </div>
  );
}

// export async function getServerSideProps() {
//   const category_response = await fetch("http://localhost:3000/api/category");
//   const category_data = await category_response.json();
//   const banners_response = await fetch("http://localhost:3000/api/banners");
//   const banners_data = await banners_response.json();
//   return {
//     props: {
//       categorydata: category_data,
//       bannersdata: banners_data,
//     },
//   };
// }
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
