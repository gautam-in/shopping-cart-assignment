import ProductsCategories from '../Products-categories/ProductsCategories';
import ProductsListing from '../Products-listing/ProductListing';
import useProductsData from './hooks';

import styles from './Products.module.scss';

const Products = () => {
  const { products, categories } = useProductsData();
  return (
    <div className={styles['products-container']}>
      <div className={styles['products-categories']}>
        {categories.length > 0 && <ProductsCategories categories={categories} />}
      </div>
      <div className={styles['products-list']}>
        <ProductsListing products={products} />
      </div>
    </div>
  );
};

export default Products;
