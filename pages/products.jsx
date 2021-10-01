import CategoryFilterList from '../components/CategoryFilter/CategoryFilterList';
import ProductList from '../components/Products/ProductList';
import styles from '../styles/Products.module.css';
import products from '../server/products/index.get.json';

export default function Products({ productsData }) {
  return (
    <div className={styles.ProductsContainer}>
      <div className={styles.CategoryFiltorSection}>
        <CategoryFilterList />
      </div>
      <div className={styles.ProductListContainer}>
        <ProductList productsData={productsData} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = products;

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      productsData: data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 12 hours
    revalidate: 43200, // In seconds
  };
}
