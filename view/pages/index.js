import styles from "../styles/Home.module.scss";
import ProductDetail from "../modules/template/ProductDetail";
import Slider from "../common/components/lib/Slider";

export default function Home({ categories, banners }) {
  return (
    <div>
      <Slider data={banners} />
      {categories
        ? categories.map((item) => {
            return (
              <div key={item.id}>
                <ProductDetail item={item} />
                <div className={styles.homeCardBorder}></div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export async function getServerSideProps() {
  const categories_data = await fetch("http://localhost:3000/api/categories");
  const categories = await categories_data.json();
  categories.sort((a, b) => {
    return a.order - b.order;
  });
  const banners_data = await fetch("http://localhost:3000/api/banners");
  const banners = await banners_data.json();

  return {
    props: {
      categories: categories,
      banners: banners,
    },
  };
}
